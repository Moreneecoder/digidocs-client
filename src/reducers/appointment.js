const appointmentReducer = (state = null, action) => {
  let output;

  switch (action.type) {
    case 'LOAD_APPOINTMENT':
      output = action.appointment;
      break;
    default:
      output = state;
  }

  return output;
};

export default appointmentReducer;
