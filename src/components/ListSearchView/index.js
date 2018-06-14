import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as repoActions } from '../../store/ducks/repos';

import { ListSearch, ListItems } from './styles';

const ListSearchView = ({ repos, selectRepo }) => {
  console.tron.log(repos);
  const repoItem = repos.map(item => (
    <ListItems
      key={item.id}
      onClick={() => selectRepo(item.id)}
    >
      <img src={item.avatar} alt={item.organization} />
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
      { repoItem }
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
  selectRepo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = dispatch => bindActionCreators(repoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListSearchView);
