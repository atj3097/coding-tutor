import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import Messaging from './messaging/messaging';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path='/chat' element={<Messaging />} />
      </Routes>
    </Router>
  );
}

export default App;
