import {
  Switch, Route,
} from 'react-router-dom';
import './App.css';
import { Layout } from 'antd';
import HomePage from './Components/Hompage';
import CrypoDetails from './Components/crypoDetails';
import Cryptocurrency from './Components/cryptocurrency';

const App = () => (
  <Layout>
    <div className="routes">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/crytocurrencies">
          <Cryptocurrency />
        </Route>
        <Route exact path="/crypto/:coinId">
          <CrypoDetails />
        </Route>
        <Route>404 Not Found</Route>
      </Switch>
    </div>
  </Layout>

);

export default App;
