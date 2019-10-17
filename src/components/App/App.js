import React from 'react';
// import logo from '../../../src/logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList'

function App() {
  // render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    )  
  // } 
}

export default App;
