import { NavLink } from 'react-router-dom';

import { useScrollPosition } from '@/hooks';

export const NavBar: React.FC = () => {
  const scroll = useScrollPosition();

  return (
    <nav
      className={`navbar navbar-dark navbar-expand-md fixed-top ${scroll ? '' : 'scrolled'}`}
      id="mainNavBar"
    >
      <a className="navbar-brand" href="#">
        CHESS STORE
      </a>
      <button
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-bs-target="#navLinks"
        data-bs-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            HOME
          </NavLink>
        </ul>
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/about">
            ABOUT
          </NavLink>
        </ul>
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/subscription">
            JOIN US
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
