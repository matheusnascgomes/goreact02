import React from 'react';

import { Container, FormStyled, ListSeach, ListItems } from './styles';

const Sidebar = () => (
  <Container>
    <FormStyled>
      <input type="text" placeholder="Novo repositório" />
      <button><i className="fa fa-plus-circle" /></button>
    </FormStyled>
    <ListSeach>
      <ListItems>
        <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="facebook" />
        <div className="text">
          <p>react-navigation</p>
          <small>React Community</small>
        </div>
        <div className="icon_select"><i className="fa fa-angle-right" /></div>
      </ListItems>
    </ListSeach>
  </Container>
);

export default Sidebar;
