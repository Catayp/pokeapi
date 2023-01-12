import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import CardPokemon from "./CardPokemon";
import { useParams } from "react-router-dom";

const Search = () => {
    const word = useParams().pokemon
    const pokemonContext = useContext(PokemonContext);
    const filter = new RegExp('^'+word);
    console.log(filter);
    const listPokemones = pokemonContext.pokemones.filter(pok => filter.test(pok.name));
    if (listPokemones.length === 0) {
        return(<h1>Not found</h1>);
    }
    return(
        <CardPokemon pokemones={listPokemones}/>
    );
}

export default Search;