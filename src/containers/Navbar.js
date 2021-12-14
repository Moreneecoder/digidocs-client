import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userAuth from '../helpers/userAuth';
import '../styles/Navbar.css';

const Navbar = () => {
  const loggedIn = useSelector((state) => state.user);
  let appointmentlink = '/login';

  if (loggedIn || userAuth()) {
    appointmentlink = '/';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger text-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bolder" to="/">DigiDocs</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="Navbar collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to={appointmentlink}>Appointments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/fixtures">Fixtures</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/goalchart">Goal Chart</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            {loggedIn || userAuth() ? (
              <li className="nav-item">
                <Link className="nav-link text-white" to="/logout">Logout</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
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
