import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../hooks/http';
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

    const response = await auth(fetchUrl, userData);

    if (response.status === 200) {
      if (response.user.is_doctor) userRole = 'doctors';
      localStorage.setItem('user', JSON.stringify({ role: userRole, id: response.user.id }));
      dispatch(authSuccess(true));
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="form-control mt-1" required placeholder="Name" onChange={(e) => handleInputChange(e, 'nameInput')} />
        <input className="form-control mt-1" required placeholder="Email" onChange={(e) => handleInputChange(e, 'emailInput')} />

        <button type="submit" className="btn btn-success mt-1">Login</button>
      </form>

      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
