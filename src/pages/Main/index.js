import React from 'react';

import { Container } from './styles';

const Main = () => (
  <Container>
    <div className="issue">
      <img src="https://lh3.googleusercontent.com/-vO9KvIggFxo/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq3QxggqR-qhpmtABY8_PtunfkrDaQ/s96-c-mo/photo.jp" alt="facebook" />
      <div className="block_info">
        <p className="text">Teste</p>
        <p className="user_name">matheusnascgomes</p>
        <button>
          <i className="fa fa-link" /> ABRIR ISSUE
        </button>
      </div>
    </div>
  </Container>
);

export default Main;
