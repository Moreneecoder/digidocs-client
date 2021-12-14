import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import env from 'react-dotenv';

// const corsUrl = 'https://cors-anywhere.herokuapp.com';

const useHttp = (url, action, dependencies) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(action(data));
      });
  }, dependencies);
};

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

// const logIn = (url) => fetch(`https://cors-anywhere.herokuapp.com/${url}`)

export { useHttp, postReq };
