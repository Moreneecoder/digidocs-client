const userAuth = () => {
//   console.log(localStorage.getItem('user'));
//   const user = useSelector((state) => state.user);
  const user = localStorage.getItem('user');
  return user != null;
};

export default userAuth;
