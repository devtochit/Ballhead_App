import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import HomePage from './Components/Hompage';
import CrypoDetails from './Components/crypoDetails';
import Cryptocurrency from './Components/cryptocurrency';
import './App.css';

const App = () => (
  <Layout>
    <div className="routes">
      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crypto/:coinId" element={<CrypoDetails />} />
          <Route path="/profile" element={<Cryptocurrency />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  </Layout>

);

export default App;
