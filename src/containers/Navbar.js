import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userAuth from '../helpers/userAuth';
import { loggedOut } from '../actions';
import '../styles/Navbar.css';

const Navbar = () => {
  const loggedIn = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(loggedOut(false));
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white text-primary">
      <div className="container-fluid">
        <div />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="Navbar collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />

          <ul className="navbar-nav ml-auto me-3 mb-2 mb-lg-0">
            {loggedIn || userAuth() ? (
              <>
                <li className="nav-item">
                  <span className="nav-link fw-bolder text-dark">{JSON.parse(userAuth()).data.name}</span>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link border-0 text-white main-bg-color px-3" onClick={() => handleLogOut()}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link main-bg-color text-white me-2 px-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link main-bg-color text-white px-3" to="/register">Register</Link>
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
