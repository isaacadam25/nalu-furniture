import React from 'react';
import { Container, Row } from 'react-bootstrap';

import NavBar from '../../app/components/NavBar';
import TopBar from '../../app/components/TopBar';

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <TopBar />
      </Row>
    </Container>
  );
};

export default Header;
