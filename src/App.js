import './App.css';
import List from './components/List';
import NavbarPokemon from './components/NavbarPokemon';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
 return(
  <Router>
    <NavbarPokemon/>
    <br/>
    <Routes>
      <Route path='/' element={<List />}/>
      <Route path='/:id' element={<List />}/>
    </Routes>
  </Router> 
 );
}

export default App;
