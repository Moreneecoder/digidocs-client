const userReducer = (state = null, action) => {
  let output;

  switch (action.type) {
    case 'SIGNED_UP':
      output = action.loggedIn;
      break;
    default:
      output = state;
  }

  return output;
};

export default userReducer;
