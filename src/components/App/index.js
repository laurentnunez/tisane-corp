import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './app.scss';

import Header from '../Header';
import Home from '../Home';
import LastsShows from '../LastsShows';
import Team from '../Team';
import Podcasts from '../Podcasts';
import Footer from '../Footer';
import Episodes from '../Episodes';

function App() {
  
  const location = useLocation();

  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location],
  );
  
  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/derniers-episodes" element={<LastsShows />} />
          <Route path="/a-propos" element={<Team />} />
          <Route path="/podcast/:id" element={<Episodes />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
