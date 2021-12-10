// import { useNavigate } from 'react-router-dom';
import userAuth from '../helpers/userAuth';

const Appointments = () => {
//   const navigate = useNavigate();
  if (userAuth()) {
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
