import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

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

export { useHttp, postReq };
