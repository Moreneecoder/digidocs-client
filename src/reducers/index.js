import { combineReducers } from 'redux';
import appointmentsReducer from './appointments';
import appointmentReducer from './appointment';
import doctorsReducer from './doctorsReducer';
import doctorReducer from './doctorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
  appointment: appointmentReducer,
  doctors: doctorsReducer,
  doctor: doctorReducer,
});

export default rootReducer;
