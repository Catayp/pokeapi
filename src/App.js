import './App.css';
import List from './components/List';
import Search from './components/Search';
import NavbarPokemon from './components/NavbarPokemon';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
 return(
  <Router>
    <NavbarPokemon/>
    <br/>
    <Routes>
      <Route path='/' element={<List />}/>
      <Route path='/:pokemon' element={<Search />}/>
    </Routes>
  </Router> 
 );
}

export default App;
