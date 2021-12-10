import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { loggedOut } from '../actions';

const Logout = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  dispatch(loggedOut(false));
  localStorage.removeItem('user');

  //   navigate('/login');
  window.location.href = '/login';
  return null;
};

export default Logout;
