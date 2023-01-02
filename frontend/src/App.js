
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Auth/Login'
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Connecte from './pages/Connecte';
import Afficher_axios from './pages/Afficher_axios';
import Afficher_fetch from './pages/Afficher_fetch';
import AfficherProduits from './pages/AfficherProduit';
import AjouterProduit from './pages/AjouterProduit';
import ModifeProduit from './pages/ModifeProduit';
import Ajouterimage from './pages/Ajouterimage';
import Afficherimage from './pages/Afficherimage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>    
  <Routes>
  <Route path='/' exact element={<Home/>} />
     <Route path='/login'  element={<Login/>} />
     <Route path='/connecte' element={<Connecte/>} />
      <Route path='/afficher_axios' element={<Afficher_axios/>} />
      <Route path='/afficher_fetch' element={<Afficher_fetch/>} />
      <Route path='/AfficherProduit' element={<AfficherProduits/>} />
      <Route path='/AjouterProduit' element={<AjouterProduit/>} />
      <Route path='/ModifeProduit' element={<ModifeProduit/>} />
      <Route path='/Ajouterimage' element={<Ajouterimage/>} />
      <Route path='/Afficherimage' element={<Afficherimage/>} />
  </Routes>
 </Router>

    </div>
  );
}

export default App;
