import axios from 'axios';
import useSWR from "swr";
import { createContext, useState, useEffect } from 'react';
import { API } from '../tools/constants';

export const PokemonContext = createContext();

export function PokemonContextProvider({children}) {
  const [pokemones, setPokemones] = useState([]);
  const [num, setNum] = useState(0);
  
  const fetch = (url) => {
    return axios.get(`${API}/${url}`)
      .then(res => res.data);
  }

  const {data: list} = useSWR(`pokemon?limit=70&offset=${num}`, fetch );
  useEffect(() => {
    for (let i = 0; i < list?.results.length; i++) {
      axios.get(list.results[i].url)
        .then(res => setPokemones((ant) => [...ant, res.data]));
    }
  }, [list?.results]);

  console.log(pokemones);
  const dato = {
    pokemones,
    fetch,
    setNum,
    num
  }

  return(
    <PokemonContext.Provider value={dato}>
      {children}
    </PokemonContext.Provider>
  );
}

export default PokemonContext;