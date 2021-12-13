const REFRESH_TABLE = 'REFRESH_TABLE';
const FILTER_TABLE = 'FILTER_TABLE';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOGOUT = 'LOGOUT';
const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
const LOAD_APPOINTMENT = 'LOAD_APPOINTMENT';
const LOAD_DOCTORS = 'LOAD_DOCTORS';

const refreshTable = (table) => ({
  type: REFRESH_TABLE,
  latestTable: table,
});

const filterTable = (filter) => ({
  type: FILTER_TABLE,
  filter,
});

const authSuccess = (loggedIn) => ({
  type: AUTH_SUCCESS,
  loggedIn,
});

const loadAppointments = (appointments) => ({
  type: LOAD_APPOINTMENTS,
  appointments,
});

const loadAppointment = (appointment) => ({
  type: LOAD_APPOINTMENT,
  appointment,
});

const loadDoctors = (doctors) => ({
  type: LOAD_DOCTORS,
  doctors,
});

const loggedOut = (loggedOut) => ({
  type: LOGOUT,
  loggedOut,
});

export {
  refreshTable, filterTable, authSuccess, loggedOut,
  loadAppointments, loadAppointment, loadDoctors,
};
