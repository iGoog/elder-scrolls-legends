import React from 'react';
import './App.css';
import * as mockData from './mock/cards.json';
import CardList from "./components/CardList";

function App() {
  console.log(mockData.cards);

  return (
    <div className="App">
      <CardList cardList={mockData.cards}/>
    </div>
  );
}

export default App;
