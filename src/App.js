import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainSearch from './components/mainSearch';
import MarketItem from './components/marketItem';
import GetMarketListings from './components/getMarketListings';

function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainSearch></MainSearch>
      <GetMarketListings></GetMarketListings>

    </div>
  );
}

export default App;
