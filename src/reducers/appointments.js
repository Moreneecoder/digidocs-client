const appointmentsReducer = (state = [], action) => {
  let output;

  switch (action.type) {
    case 'REFRESH_TABLE':
      output = action.latestTable;
      break;
    default:
      output = state;
  }

  return output;
};

export default appointmentsReducer;
