import { NavLink } from 'react-router-dom';

// styles
import './navbar.scss';

function Navbar() {
  

  return (
    <nav className='navbar'>
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
      <button className='navbar__burger' >
        <span className='burger-bar'></span>
      </button>
    </div>    
    </nav>
  );
}

export default Navbar;