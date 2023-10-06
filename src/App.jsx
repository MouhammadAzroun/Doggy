import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import HomePage from './components/HomePage';
import DogDetails from './components/DogDetails';
import './App.css';

function App() {
  const apiUrl = 'https://api.jsonbin.io/v3/b/651ee3b80574da7622b4d1c5';

  const [dogData, setDogData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.record) {
          setDogData(data.record);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<HomePage dogData={dogData} />} />
          <Route path="/dogdetails/:index/:ownerName/:ownerLastName/:ownerPhoneNumber" element={<DogDetails dogData={dogData} />} />
        </Routes>
    </div>
  );
}

export default App;
