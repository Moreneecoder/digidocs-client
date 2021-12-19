import { useDispatch } from 'react-redux';
import { loggedOut } from '../actions';

const Logout = () => {
  const dispatch = useDispatch();

  dispatch(loggedOut(false));
  localStorage.removeItem('user');

  window.location.href = '/login';
  return null;
};

export default Logout;
