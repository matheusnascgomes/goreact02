import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as repoActions } from '../../store/ducks/repos';

// import ListSearchView from '../../components/ListSearchView';
import { Container, FormStyled } from './styles';

class Sidebar extends Component {
static propTypes = {
  addRepositoryRequest: PropTypes.func.isRequired,
//   repos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     organization: PropTypes.string,
//     avatar: PropTypes.string,
//   })).isRequired,
};

state = {
  repositoryInput: '',
}

handleAddRepository = (event) => {
  event.preventDefault();
  this.props.addRepositoryRequest(this.state.repositoryInput);
}

render() {
  return (
    <Container>
      <FormStyled onSubmit={this.handleAddRepository}>
        <input
          type="text"
          placeholder="Novo repositório"
          value={this.state.repositoryInput}
          onChange={e => this.setState({ repositoryInput: e.target.value })}
        />
        <button>
          <i className="fa fa-plus-circle" />
        </button>
      </FormStyled>
    </Container>
  );
}
}


const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = dispatch => bindActionCreators(repoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

