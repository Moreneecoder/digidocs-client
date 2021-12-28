const doctorsReducer = (state = [], action) => {
  let output;

  switch (action.type) {
    case 'LOAD_DOCTORS':
      output = action.doctors;
      break;
    default:
      output = state;
  }

  return output;
};

export default doctorsReducer;
