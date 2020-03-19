import React, { useReducer, useEffect, useMemo, useCallback } from 'react';
import './App.css';
// import * as mockData from './mock/cards.json';
import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import NavFoot from "./components/NavFoot";
import fetchCards from "./remote/ElderScrollsLegendsAPI";

function App() {

  const freshCardState = {
      cards: [],
      page: 1,
      end: false,
      retryBreaker: 5
  };
  const initialDisplayState = {
      ...freshCardState,
      search: '',
      cardCache: new Map(),
      loading : false,
      searching : false,
      scrollHeight: 0,
      viewerHeight: 0,
      targetScrollY: 0
  }
  const updateCache = (state) => {
      state.cardCache.set(state.search, {
          cards: state.cards,
          page: state.page,
          end: state.end,
          retryBreaker: state.retryBreaker
      });
  }

  const displayReducer = (displayState, action) => {
      const nextState = {...displayState};

      switch (action.type) {
          case 'REQUEST' :
              nextState.loading = true;
              return nextState;
          case  'RESPONSE':
              if ( !action.cards || action.cards.length===0) nextState.end = true;
              else {
                  nextState.cards = [...nextState.cards, ...action.cards];
                  nextState.page += 1;
              }
              updateCache(nextState);
              nextState.loading = false;
              nextState.searching = false;
              return nextState;
          case 'VIEWER_RESIZE':
              // We want to load more when we are 70% down the last loaded chunk
              nextState.viewerHeight = window.innerHeight;
              nextState.scrollHeight = document.body.scrollHeight; // refactor to a specific component
              if (nextState.page > 0)  {
                  const pageHeight = nextState.scrollHeight / nextState.page;
                  if (pageHeight < nextState.viewerHeight) {
                      nextState.targetScrollY = 0;
                  } else {
                      nextState.targetScrollY =
                          (nextState.scrollHeight - pageHeight) +
                          (pageHeight - nextState.viewerHeight ) * 0.7;
                  }
              }
              return nextState;
          case 'SEARCH':
              nextState.search = action.search;
              const cachedResults = nextState.cardCache.get(action.search);
              if (cachedResults) {
                  Object.assign(nextState, cachedResults); // fire setters, no ...spread
              } else {
                  Object.assign(nextState, freshCardState);
                  nextState.loading = true;
                  nextState.searching = true;
              }
              return nextState;
          case 'ERROR':
              if (!nextState.end ) {
                  if (nextState.retryBreaker-- <= 0) {
                      nextState.end = true;
                  }
                  updateCache(nextState);
              }
              return nextState;
          default:
              throw new Error("Don't get here");
      }

  }

  const [cardState, dispatch] = useReducer(displayReducer, initialDisplayState);

  const cardUpdateHandler = useCallback (() => {
      if (!cardState.loading) {
          dispatch({type: 'REQUEST'});
          fetchCards(cardState.page, cardState.search).then(res => {
              return res.json();
          }).then(data => {
              dispatch({type: 'RESPONSE', cards: data.cards});
              dispatch({type: 'VIEWER_RESIZE'});
          });
      }

  }, [cardState.loading, cardState.page, cardState.search]);

  const useMountEffect = (fun) => useEffect(fun, []);
  useMountEffect(cardUpdateHandler);

  useEffect(() => {
      const onResize = () => {
          dispatch({type: 'VIEWER_RESIZE'});
          if (window.scrollY >= cardState.targetScrollY) {
              cardUpdateHandler();
          }
      }
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
  }, [cardState.loading, cardState.targetScrollY, cardState.page, cardState.search, cardUpdateHandler]);

  useEffect(() => {
      const onScroll = () => {
          if (window.scrollY >= cardState.targetScrollY) {
              cardUpdateHandler();
          }
      }

      window.addEventListener('scroll', onScroll);
      return () =>  {
          window.removeEventListener('scroll', onScroll);
      }
  }, [cardState.loading, cardState.targetScrollY, cardState.page, cardState.search, cardUpdateHandler]);

  const cardListComponent = useMemo(
      () => <CardList cardList={cardState.cards}/>,
      [cardState.cards]
  );

  return (
    <div className="App">
        <NavBar searching={cardState.searching}/>
        {cardListComponent}
        { cardState.loading && <NavFoot/> }

    </div>
  );
}

export default App;
