import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className='container-fluid'>
            <img src={logo} alt="logo" width={150} />
            <ul className='navbar-ul'>
               <li><Link to="/">Accueil</Link></li>
               <li><Link to="/propos">A propos de nous</Link></li>
               <li><Link to="/contact">Contactez-nous</Link></li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
