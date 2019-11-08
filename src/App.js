import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainSearch from './components/mainSearch';
import './components/category.module.css';
function App() {
  
  return (
    <div className="App" id="app">
      <NavBar></NavBar>
      <MainSearch></MainSearch>
      <div id="items">
        <p>(Sök resultat kommer visas här, det ska vara filter just nu men har ej lagt till :])</p>
      </div>
    </div>
  );
}

export default App;
