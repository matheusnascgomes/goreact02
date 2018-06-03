import React, { Component } from 'react';
import api from '../../services/api';

import ListSearchView from '../../components/ListSearchView';
import { Container, FormStyled } from './styles';

export default class Sidebar extends Component {
    state = {
      repositoryInput: '',
      repositories: [],
    }

    handleSearch = async (e) => {
      e.preventDefault();

      try {
        const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

        this.setState({
          repositories: [...this.state.repositories, {
            id: repository.id,
            name: repository.name,
            organization: repository.organization.login,
            image: repository.owner.avatar_url,

          }],
        });
      } catch (error) {
        console.log(error);
      }

      console.log(this.state.repositories);
    }

    render() {
      return (
        <Container>
          <FormStyled onSubmit={this.handleSearch}>
            <input
              type="text"
              placeholder="Novo repositório"
              onChange={e => this.setState({ repositoryInput: e.target.value })}
            />
            <button>
              <i className="fa fa-plus-circle" />
            </button>
          </FormStyled>

          <ListSearchView repos={this.state.repositories} />

        </Container>
      );
    }
}

