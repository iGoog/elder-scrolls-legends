import React from 'react';
import './App.css';
import * as mockData from './mock/cards.json';
import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import NavFoot from "./components/NavFoot";

function App() {
  console.log(mockData.cards);

  return (
    <div className="App">
        <NavBar/>
        <CardList cardList={mockData.cards}/>
        <NavFoot/>
    </div>
  );
}

export default App;
