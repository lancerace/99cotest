import React, { Component } from 'react';
import ListingCarousel from './components/ListingCarousel';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Listing Carousel Test by 99.co</h2>
        </div>
        <div className="p-4">
          <div className="header-container">
            <h1 style={{ color: `rgb(27,34,88)` }}>Listing with videos</h1>
            <h4 style={{ color: `rgb(32,107,255)` }}>See all</h4>
          </div>
          

          <ListingCarousel />
        </div>
      </div>
    );
  }
}

export default App;
