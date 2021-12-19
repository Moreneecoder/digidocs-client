import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postReq } from '../hooks/http';
import { authSuccess } from '../actions';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchUrl = 'http://digidocs-api.herokuapp.com/api/v1/login';
    let userRole = 'users';

    const userData = {
      name, email,
    };

    const response = await postReq(fetchUrl, userData);

    if (response.status === 200) {
      if (response.user.is_doctor) userRole = 'doctors';
      localStorage.setItem('user', JSON.stringify({ role: userRole, data: response.user }));
      dispatch(authSuccess(userData));
      navigate('/');
    }
  };

  const handleInputChange = (data, from) => {
    switch (from) {
      case 'nameInput':
        setName(data.target.value);
        break;
      case 'emailInput':
        setEmail(data.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Login container">
      <form className="card mt-5 p-4 offset-md-2 col-md-8 offset-lg-3 col-lg-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <span>UserName</span>
          <input className="form-control mt-1" required placeholder="Name" onChange={(e) => handleInputChange(e, 'nameInput')} />
        </div>
        <div className="mb-3">
          <span>Email address</span>
          <input className="form-control mt-1" required placeholder="Email" onChange={(e) => handleInputChange(e, 'emailInput')} />
        </div>

        <button type="submit" className="btn text-white main-bg-color">Login</button>
        <hr />
        <div className="text-end">
          <span>Don&apos;t have an account?</span>
          {' '}
          <Link className="main-bg-color text-decoration-none text-white me-2 py-2 px-3" to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
