import './App.css';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Accueil from './pages/accueil/Accueil.jsx';

function App(){
  return (
    <Router>
    <NavBar />
    <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/accueil' element={<Accueil />} />
    </Routes>
    </Router>
  )
}
export default App