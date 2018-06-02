import React from 'react';

import { ListSearch, ListItems } from './styles';

const ListSearchView = () => (
  <ListSearch>
    <ListItems>
      <img src="https://avatars3.githubusercontent.com/u/69631?v=4" alt="facebook" />
      <div className="text">
        <p>react-navigation</p>
        <small>React Community</small>
      </div>
      <div className="icon_select"><i className="fa fa-angle-right" /></div>
    </ListItems>
  </ListSearch>
);

export default ListSearchView;
