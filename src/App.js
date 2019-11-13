import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainSearch from './components/mainSearch';
import Footer from './components/footer';
import './components/category.module.css';

function App() {

  return (
    <div className="App" id="app">
    
      <NavBar></NavBar>
      <MainSearch></MainSearch>
      <div id="items">
        
      </div>

      <Footer></Footer>
    </div>
  );
}


export default App;
