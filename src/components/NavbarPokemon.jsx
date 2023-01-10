import { Navbar, Container, Image, Form, Button } from 'react-bootstrap';

const NavbarPokemon = () => (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image 
            src={process.env.PUBLIC_URL + "/pokemon_logo.png"}
            width="300"
            height="70"
            className="d-inline-block"
          />
        </Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>  
);

export default NavbarPokemon;