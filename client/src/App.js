import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('/api/cats');
        setCats(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cat images:', error);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <div className="App">
      <h1>Cat Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="cat-gallery">
          {cats.map((cat, index) => (
            <div key={index} className="cat-item">
              <img src={cat.url} alt="Cat" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;