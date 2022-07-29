import {
  Switch, Routes, Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './Components/Hompage';
import CrypoDetails from './Components/crypoDetails';
import Cryptocurrency from './Components/cryptocurrency';
import { Layout } from 'antd'

const App = () => (
  <Layout>
    <div className='routes'>
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
