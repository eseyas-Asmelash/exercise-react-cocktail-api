import { ReactElement, useState } from 'react';
import {Container, Nav, Navbar, Form,Row, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(): ReactElement {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cocktail Wiki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/favorites">
              <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form onSubmit={handleSearchSubmit}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className=" mr-sm-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Col>
              <Col xs="auto">
              <Button type="submit">Search</Button>
              </Col>
            </Row>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
