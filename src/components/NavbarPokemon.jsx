import { Navbar, Container, Image, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const NavbarPokemon = () => {

  const [word, setWord] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (word === '') {
      navigate(`/`);
    }
    navigate(`/${word}`);
  },[word, navigate]);

  return (
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
            onChange={(event) => setWord(event.target.value)}
          />
          <Button variant="outline-success">
            {/* <Link to={`/${word}`}>search</Link> */}
          </Button>
        </Form>
      </Container>
    </Navbar>  
  )
};

export default NavbarPokemon;