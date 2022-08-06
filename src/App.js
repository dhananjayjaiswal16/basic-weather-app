import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage';
import CityWeather from './pages/CityWeather';
import './scss/styles/App.scss'
function App() {
  const [cities, setCities] = useState([]);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage cities={cities} setCities={setCities} />} />
          <Route exact path="/weather/:cityName" element={<CityWeather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
