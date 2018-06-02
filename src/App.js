import React from 'react';

import './styles/global';

import Header from './pages/Header';
import Main from './pages/Main';
import Sidebar from './pages/Sidebar';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main_container" >
      <Header />
      <Main />
    </div>

  </div>
);

export default App;
