import { combineReducers } from 'redux';
import appointmentsReducer from './appointments';
import appointmentReducer from './appointment';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
  appointment: appointmentReducer,
});

export default rootReducer;
