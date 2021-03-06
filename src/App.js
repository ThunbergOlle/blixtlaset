import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import MainSearch from './components/mainSearch';
import MarketItem from "./components/marketItem";
import './components/category.module.css';
import FeaturedListings from './components/featuredListings';
function App() {
  const isMobile = window.innerWidth <= 500;

  return (
    <div className="App" id="app">
      {!isMobile &&
      <img src="https://i.imgur.com/nZhBmDZ.png" height="750" width="100%;" style={{position: 'absolute', top: 0, left: 0, zIndex: -1}} alt="background"></img> 
      }
      <NavBar></NavBar>
      <MainSearch></MainSearch>
      {!isMobile &&
      <div style={{paddingBottom: 140}}></div>
      }
      <div id="items">
      <h1 style ={{fontWeight: '50'}}>Trendande just nu 🔥</h1>
      <FeaturedListings title="iPhone X Begagnad 64gb" image="https://tech-news.websawa.com/wp-content/uploads/2019/08/the-beginning-of-sales-iphone-x-apples-comeback.jpg" views="123"/>
      <FeaturedListings title="Volvo 740 nyskick" image="https://upload.wikimedia.org/wikipedia/commons/0/0c/Volvo_740_vorn.JPG" views="140"/>
      <FeaturedListings title="Elgitarr, flera förstärkare" image="http://www.allmusikverkstan.com/bilder/forstarkare/forstarkare_3.jpg" views="132"/>
 
      <MarketItem title="Toro 580D groundmaster -10" price="110 000 kr" location="Osby" image="https://cdn.blocket.com/static/2/lithumbs/04/0413001378.jpg" company="https://i.imgur.com/IcUn5Jr.png" link={"https://google.com"}></MarketItem>
      
      </div> 
    
    </div>
  );
}


export default App;
