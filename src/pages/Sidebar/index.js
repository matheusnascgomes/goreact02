import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/repos';
import api from '../../services/api';


import ListSearchView from '../../components/ListSearchView';
import { Container, FormStyled } from './styles';


const Sidebar = ({ addRepository }) => {
  let repositoryInput = '';
  const handleChange = (value) => {
    repositoryInput = value;
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);
      const repositories = [{
        id: repository.id,
        name: repository.name,
        organization: repository.organization.login,
        image: repository.owner.avatar_url,
      }];

      addRepository(repositories);
    } catch (error) {
      console.log(error);
    }
    console.log();
  };

  return (
    <Container>
      <FormStyled onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Novo repositório"
          onChange={e => handleChange(e.target.value)}
        />
        <button>
          <i className="fa fa-plus-circle" />
        </button>
      </FormStyled>

      <ListSearchView />

    </Container>
  );
};
const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = dispatch => bindActionCreators({ TodoActions, dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

