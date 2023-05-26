import {
  BrowserRouter,
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Weather from './components/Coordinates';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:province" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
