// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';

const Appointments = () => {
//   const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user);

  if (loggedIn || userAuth()) {
    return (
      <div className="Appointments">
        <h1>Appointino</h1>
      </div>
    );
  }

  //   navigate('/register');
  window.location.href = '/login';
  return null;
};

export default Appointments;
