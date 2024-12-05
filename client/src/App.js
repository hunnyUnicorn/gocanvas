import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const cats = [
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    "https://cdn2.thecatapi.com/images/8pl.jpg",
    ];
    const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1>Cat Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cat-gallery">
          {cats.map((cat, index) => (
            <div key={index} className="cat-item">
              <img src={cat} alt="Cat"/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;