import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetail from './components/TrainDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/train/:trainNumber" element={<TrainDetail />} />
        <Route path="/" element={<TrainList />} />
      </Routes>
    </Router>
  );
}

export default App;