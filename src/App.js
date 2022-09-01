import React from 'react';
import { FaSearch } from 'react-icons/fa';

import chuckNorris from '../src/components/assets/chuck.png'

import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="input-search-content">
          <img src={chuckNorris} alt="chuck norris with guns" />
          <h1>Search Norris</h1>
          <input type="search" />
          <div className="btn-content">
            <button className='btn-search'>
              <FaSearch className="search-icon"/>
              Search
            </button>
            <button className='btn-lucky'>I'm feeling lucky!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
