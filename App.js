import React from 'react';
import './App.css'; // Import your CSS file for styling
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
    </HashRouter>
  );
}

export default App;
