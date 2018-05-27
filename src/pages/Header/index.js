import React from 'react';

import { Container } from './styles';

const Header = () => (
  <Container>
    <div className="info_header">
      <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="facebook" />
      <div className="text">
        <p>react-navigation</p>
        <small>React Community</small>
      </div>
    </div>

    <div className="filter">
      <select className="">
        <option>Todas</option>
        <option>Abertas</option>
        <option>Fechadas</option>
      </select>
    </div>
  </Container>
);

export default Header;
