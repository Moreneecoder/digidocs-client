const userReducer = (state = null, action) => {
  let output;

  switch (action.type) {
    case 'AUTH_SUCCESS':
      output = action.loggedIn;
      break;
    case 'LOGOUT':
      output = action.loggedOut;
      break;
    default:
      output = state;
  }

  return output;
};

export default userReducer;
