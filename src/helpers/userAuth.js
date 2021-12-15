const userAuth = () => {
  const user = localStorage.getItem('user');
  return user != null;
};

export default userAuth;
