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
          <li className="nav-item">
            <a aria-current="page" className="nav-link active" href="">
              HOME
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="">
              ABOUT
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/suscription">
              JOIN US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
