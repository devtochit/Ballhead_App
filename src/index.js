import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './Redux/store';
import App from './App';

import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
