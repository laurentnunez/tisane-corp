import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.scss';

import Header from '../Header';
import Home from '../Home';
import LastsShows from '../LastsShows';
import Team from '../Team';
import Podcasts from '../Podcasts';
import Footer from '../Footer';
import PodDetails from '../PodDetails';

function App() {

  return (
    <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/derniers-episodes" element={<LastsShows />} />
          <Route path="/a-propos" element={<Team />} />
          <Route path="/podcast/:id" element={<PodDetails />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
