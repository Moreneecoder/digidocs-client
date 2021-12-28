const doctorReducer = (state = null, action) => {
  let output;

  switch (action.type) {
    case 'LOAD_DOCTOR':
      output = action.doctor;
      break;
    default:
      output = state;
  }

  return output;
};

export default doctorReducer;
