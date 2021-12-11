import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import env from 'react-dotenv';
import { loadAppointments } from '../actions';

const corsUrl = 'https://cors-anywhere.herokuapp.com';

const useHttp = (url, dependencies) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${corsUrl}/${url}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadAppointments(data));
      });
  }, dependencies);
};

const auth = (url, data) => fetch(`${corsUrl}/${url}`, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json());

// const logIn = (url) => fetch(`https://cors-anywhere.herokuapp.com/${url}`)

export { useHttp, auth };
