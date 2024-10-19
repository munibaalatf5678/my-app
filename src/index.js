import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM.render for React 18
import './index.css'; // Import your global CSS styles
import App from './App'; // Main App component
import StoryDetails from './StoryDetails'; // StoryDetails component
import StoryDetails2 from './StoryDetails2'; // StoryDetails2 component
import Islamic from './islamic'; // Islamic component (ensure the filename and casing match)
import Deaf from './Deaf'; // Deaf component
import Deaf2 from './Deaf2'; // Deaf2 component
import Deaf3 from './Deaf3'; // Deaf3 component
import Deaf4 from './Deaf4'; // Deaf4 component (newly added Deaf4)

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes

// Get the root element where the React app will be rendered
const container = document.getElementById('root');
const root = createRoot(container); // Create root for React 18

// Render the app with Router and Routes
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define all routes */}
        <Route path="/" element={<App />} />
        <Route path="/story-details" element={<StoryDetails />} />
        <Route path="/story-details2" element={<StoryDetails2 />} />
        <Route path="/islamic" element={<Islamic />} /> {/* Ensure component name and import match */}
        <Route path="/Deaf" element={<Deaf />} />
        <Route path="/Deaf2" element={<Deaf2 />} />
        <Route path="/Deaf3" element={<Deaf3 />} />
        <Route path="/Deaf4" element={<Deaf4 />} /> {/* New route for Deaf4 */}
      </Routes>
    </Router>
  </React.StrictMode>
);
