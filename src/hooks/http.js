// import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import env from 'react-dotenv';
// import { refreshTable } from '../actions';

const useHttp = (url, dependencies) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      },
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        // dispatch(refreshTable(data.response));
      });
  }, dependencies);
};

const registerUser = (url, data) => fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': 'http://digidocs-api.herokuapp.com',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json());
// .then((data) => {
//   console.log(data);
//   if (data.status === 201) {
//     localStorage.setItem('user', data.user);
//     navigate('/');
//   }
//   // dispatch(refreshTable(data.response));
// })
// .catch((error) => console.log(error));

export { useHttp, registerUser };
