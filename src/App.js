import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Rocket from './Components/RocketComponent';
import Mission from './Components/Mission';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Rocket />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
      <Route>404 Not Found</Route>
    </Routes>
  </Router>
);

export default App;
