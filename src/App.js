import React from 'react';

import { Provider } from 'react-redux';
import './config/reactotron';
import store from './store';

import './styles/global';

import Header from './pages/Header';
import Main from './pages/Main';
import Sidebar from './pages/Sidebar';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Sidebar />
      <div className="main_container" >
        <Header />
        <Main />
      </div>
    </div>
  </Provider>
);

export default App;
