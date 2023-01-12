import { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import ModalPokemon from "./ModalPokemon";

const CardPokemon = ({ pokemones }) => {
    const [modalShow, setModalShow] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    const mostrarInfo = (data) => {
        console.log(data);
        setModalShow(true);
        setPokemon(data);
    }
    return(
        <>
        <Row className="my-container">
            {pokemones.map((data, index) => (
            <Col className="pb-4" md={4} xl={3} key={index}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.sprites.front_default} />
                <Card.Body>
                    <Card.Title>{data.id}. {data.name}</Card.Title>
                    <Card.Text>
                    - {data.types[0].type.name}
                    </Card.Text>
                    <Button variant="primary" onClick={() => mostrarInfo(data)}>ver mas</Button>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        {pokemon.length === 0 
            ? <div></div> 
            : <ModalPokemon  data={pokemon} show={modalShow} onHide={() => setModalShow(false)} />
        }
        </>
    );
}

export default CardPokemon;