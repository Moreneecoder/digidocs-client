import { combineReducers } from 'redux';
import appointmentsReducer from './appointments';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  appointments: appointmentsReducer,
});

export default rootReducer;
