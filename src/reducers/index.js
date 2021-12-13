import { combineReducers } from 'redux';
import appointmentsReducer from './appointments';
import appointmentReducer from './appointment';
import doctorsReducer from './doctorsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
  appointment: appointmentReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
