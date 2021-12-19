const userAuth = () => {
  const user = localStorage.getItem('user');
  return user;
};

export default userAuth;
