import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainSearch from './components/mainSearch';
import MarketItem from './components/marketItem'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainSearch></MainSearch>
      <MarketItem  title="Test Vlvo" price="1000" location="Osby"></MarketItem>
      <MarketItem  title="V70 något annat" price="500" location="BHästveda"></MarketItem>
      <MarketItem  title="alpha-strålning" price="1" location="skitveda"></MarketItem>

    </div>
  );
}

export default App;
