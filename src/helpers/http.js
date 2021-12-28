const baseUrl = 'https://digidocs-api.herokuapp.com';
const getUserInfo = () => JSON.parse(localStorage.getItem('user'));

const registerUrl = (role) => {
  let url;
  if (role === 'users') {
    url = `${baseUrl}/api/v1/users`;
  } else if (role === 'doctors') {
    url = `${baseUrl}/api/v1/doctors`;
  }

  return url;
};

const getReq = (url) => fetch(url, {
  method: 'GET',
  mode: 'cors',
})
  .then((response) => response.json());

const postReq = (url, data) => fetch(url, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json());

const login = (user) => postReq(`${baseUrl}/api/v1/login`, user);
const register = (user, role) => postReq(registerUrl(role), user);
const getDoctors = async () => getReq(`${baseUrl}/api/v1/doctors`);
const getDoctor = async (id) => getReq(`${baseUrl}/api/v1/doctors/${id}`);
const getAppointments = async () => getReq(`${baseUrl}/api/v1/${getUserInfo().role}/${getUserInfo().data.id}/appointments`);
const getAppointment = async (id) => getReq(`${baseUrl}/api/v1/${getUserInfo().role}/${getUserInfo().data.id}/appointments/${id}`);
const createAppointment = async (user, data) => postReq(`${baseUrl}/api/v1/users/${user.data.id}/appointments`, data);

export {
  postReq, getAppointments, getAppointment, createAppointment,
  getDoctors, getDoctor, login, register,
};
