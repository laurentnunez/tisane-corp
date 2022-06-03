import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// styles
import './navbar.scss';

function Navbar() {
  
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks= () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav className={`navbar${showLinks ? '__show-nav' : ''}`}>
      <NavLink
      to="/"
      className='navbar__logo'
    >Logo
    </NavLink>

    <div className='navbar__links'>
    <NavLink
        to="/derniers-episodes"
        className={
        ({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')
        }
        >Nos Podcasts
      </NavLink>
      <NavLink
        to="/derniers-episodes"
        className={
        ({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')
        }
        >Les Derniers Episodes
      </NavLink>
      <NavLink
        to="/a-propos"
        className={
        ({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')
        }
        >A Propos
      </NavLink>
      <button className='navbar__burger' onClick={handleShowLinks} >
        <span className='burger-bar'></span>
      </button>
    </div>    
    </nav>
  );
}

export default Navbar;