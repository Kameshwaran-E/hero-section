import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

import './App.css';

const App = () => {
  return (
    <div className="border-2 border-inherit rounded-2xl  m-3">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
