import React from 'react';
import PropTypes from 'prop-types';

import { ListSearch, ListItems } from './styles';

const ListSearchView = ({ repos }) => {
  const listItemsRendered = repos.map(item => (

    <ListItems key={item.id}>
      <img src={item.image} alt={item.organization} />
      <div className="block_info">
        <div className="text">
          <p>{item.name}</p>
          <small>{item.organization}</small>
        </div>
        <div className="icon_select"><i className="fa fa-angle-right" /></div>
      </div>
    </ListItems>

  ));

  return (
    <ListSearch>
      {listItemsRendered}
    </ListSearch>
  );
};

ListSearchView.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    organization: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default ListSearchView;
