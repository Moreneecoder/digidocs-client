import { /* useDispatch, */ useSelector } from 'react-redux';

const userAuth = () => {
  const user = useSelector((state) => state.user);
  return user != null;
};

export default userAuth;
