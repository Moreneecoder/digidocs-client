const appointmentsReducer = (state = [], action) => {
  let output;

  switch (action.type) {
    case 'LOAD_APPOINTMENTS':
      output = action.appointments;
      break;
    default:
      output = state;
  }

  return output;
};

export default appointmentsReducer;
