import logo from '../assets/logo.png';
import { NavLink,Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header style={navDiv} className='bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-4 border-gray-500 p-0'>
    //   <nav className="">
    //     <div className='logo'>
    //           <img src={logo} alt="logo" width={150} />
    //     </div>
    //         <ul className='navbar-ul' style={navBar}>
    //            <li><Link to="/">Accueil</Link></li>
    //            <li><Link to="/propos">A propos de nous</Link></li>
    //            <li><Link to="/contact">Contactez-nous</Link></li>
    //         </ul>
    //   </nav>
    // </header>
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
        <NavLink to="/propos">A propos de nous</NavLink>
        </li>
        <li>
        <NavLink to="/contact">Contactez-nous</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
