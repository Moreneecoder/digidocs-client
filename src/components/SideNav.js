import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userAuth from '../helpers/userAuth';
import '../styles/SideNav.css';

const SideNav = () => {
  const loggedIn = useSelector((state) => state.user);
  let appointmentlink = '/login';

  if (loggedIn || userAuth()) {
    appointmentlink = '/';
  }

  return (
    <div style={{ height: window.screen.height }} className="SideNav border-end bg-white" id="sidebar-wrapper">
      <Link className="text-dark text-decoration-none text-center" to={appointmentlink}><h2 className="pt-3 pb-5">DigiDocs</h2></Link>
      <div className="side-nav-links list-group list-group-flush fw-bolder float-end">
        <Link className="text-decoration-none px-3 py-2 text-white main-bg-color" to={appointmentlink}>APPOINTMENTS</Link>
        <Link className="text-decoration-none px-3 py-2 text-dark" to="/doctors">DOCTORS</Link>
      </div>
    </div>
  );
};

export default SideNav;
