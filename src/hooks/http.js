import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import baseUrl from '../helpers/global_constants';

const userInfo = JSON.parse(localStorage.getItem('user'));

const useHttp = (url, action, dependencies) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(action(data));
      });
  }, dependencies);
};

const getReq = (url) => fetch(url, {
  method: 'GET',
  mode: 'cors',
})
  .then((response) => response.json());

const getAppointments = async () => getReq(`${baseUrl()}/api/v1/${userInfo.role}/${userInfo.data.id}/appointments`);
// console.log(response);
// // console.log(action);
// // if (response.status === 200) dispatch(action())
// dispatch(action(response));

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

export { useHttp, postReq, getAppointments };
