import logo from '../assets/logo.png';
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className='title'><img src={logo} alt="logo" width={150} /></Link>
      <div className='menu' onClick={() => {setMenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <NavLink to="/accueil">Accueil</NavLink>
        </li>
       
        <li>
        <NavLink to="/contact">Contactez-nous</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
