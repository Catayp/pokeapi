import { Modal, Button, Row, Col, Image, ListGroup } from "react-bootstrap";
import Stats from "./Stats";

const ModalPokemon = ({ show, onHide, data }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.name} - {data.types[0].type.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={7}>
          <h4>ability</h4>
            <ListGroup variant="flush">
              {data.abilities.map((response, index) =>
                <ListGroup.Item key={index}>{response.ability.name}</ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <Col md={5} className="px-0 mx-0">
            <Image style={{ width: '10rem' } } className="d-flex mx-auto"  src={data.sprites.front_default} />
          </Col>
        </Row>
        <h4>stats</h4>
        {data.stats.map((res, i) =>
          <Row key={i}>
            <Col md ={2}>
              <label>{res.stat.name}</label>
            </Col>
            <Col md={10}>
              <Stats  num={res.base_stat} />
            </Col>
          </Row> 
        )}        
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPokemon;
