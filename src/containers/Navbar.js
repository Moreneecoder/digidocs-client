import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userAuth from '../helpers/userAuth';
import '../styles/Navbar.css';

const Navbar = () => {
  const loggedIn = useSelector((state) => state.user);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bolder" to="/">DigiDocs</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="Navbar collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />

          <ul className="navbar-nav ml-auto me-3 mb-2 mb-lg-0">
            {loggedIn || userAuth() ? (
              <>
                <li className="nav-item">
                  <span className="nav-link fw-bolder text-dark">UserName</span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white main-bg-color px-3" to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link main-bg-color" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-bg-color" to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
