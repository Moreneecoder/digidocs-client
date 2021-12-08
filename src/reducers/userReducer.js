const userReducer = (state = null, action) => {
  let output;

  switch (action.type) {
    case 'SET_USER':
      output = action.user;
      break;
    default:
      output = state;
  }

  return output;
};

export default userReducer;
