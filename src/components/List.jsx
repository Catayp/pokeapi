import { useContext/*, useState */} from "react";
import { /*Card, Button,*/ Container/*, Row, Col*/ } from "react-bootstrap";
import { PokemonContext } from "../context/PokemonContext";
// import ModalPokemon from "./ModalPokemon";
import InfiniteScroll from 'react-infinite-scroller';
import CardPokemon from "./CardPokemon";

const List = () => {
  const pokemonContext = useContext(PokemonContext);

  // const [modalShow, setModalShow] = useState(false);
  // const [pokemon, setPokemon] = useState([]);

  // const mostrarInfo = (data) => {
  //   console.log(data);
  //   setModalShow(true);
  //   setPokemon(data);
  // }
  return(
    <>
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => pokemonContext.setNum((prev) => prev + 10)}
        hasMore={pokemonContext.num < 400 ? true : false}
        loader={<div key={0}> Loading ...</div>}
        initialLoad={false}
      >
        <CardPokemon pokemones={pokemonContext.pokemones}/>
        {/* <Row className="my-container">
          {pokemonContext.pokemones.map((data, index) => (
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
        } */}
      </InfiniteScroll>
    </Container>
    </>
  );
}

export default List;