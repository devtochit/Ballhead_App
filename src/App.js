import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './Components/Hompage';
import CrypoDetails from './Components/crypoDetails';
import Cryptocurrency from './Components/cryptocurrency';

const App = () => (
  <Router>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/crytocurrencies" element={<Cryptocurrency />} />
      <Route path="/crypto/:coinId" element={<CrypoDetails />} />
      <Route>404 Not Found</Route>
    </Routes>
  </Router>
);

export default App;
