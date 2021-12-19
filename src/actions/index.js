const AUTH_SUCCESS = 'AUTH_SUCCESS';
const LOGOUT = 'LOGOUT';
const LOAD_APPOINTMENTS = 'LOAD_APPOINTMENTS';
const LOAD_APPOINTMENT = 'LOAD_APPOINTMENT';
const LOAD_DOCTORS = 'LOAD_DOCTORS';
const LOAD_DOCTOR = 'LOAD_DOCTOR';

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

const loadDoctor = (doctor) => ({
  type: LOAD_DOCTOR,
  doctor,
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
  authSuccess, loggedOut, loadAppointments, loadAppointment,
  loadDoctors, loadDoctor,
};
