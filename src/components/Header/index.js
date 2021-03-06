import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/1264054?s=460&v=4" alt="Avatar" />
      Edison Ferraz
    </User>
  </Container>
);

export default Header;
