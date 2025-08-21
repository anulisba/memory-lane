import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemorialWebsite from './Pages/landing';
import Gallery from './Pages/gallery'; // <-- create this page/component
import Timeline from './Pages/timeline';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MemorialWebsite />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
  );
}

export default App;
