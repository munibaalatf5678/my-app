import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import StoryDetails from './StoryDetails';
import StoryDetails2 from './StoryDetails2';
import Islamic from './islamic';
import Deaf from './Deaf';
import Deaf2 from './Deaf2';
import Deaf3 from './Deaf3';
import Deaf4 from './Deaf4';
import Navbar from './Navbar'; // Import the Navbar component

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Navbar /> {/* Navbar will appear on all pages */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/story-details" element={<StoryDetails />} />
        <Route path="/story-details2" element={<StoryDetails2 />} />
        <Route path="/islamic" element={<Islamic />} />
        <Route path="/Deaf" element={<Deaf />} />
        <Route path="/Deaf2" element={<Deaf2 />} />
        <Route path="/Deaf3" element={<Deaf3 />} />
        <Route path="/Deaf4" element={<Deaf4 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
