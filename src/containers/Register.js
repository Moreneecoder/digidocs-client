import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postReq } from '../hooks/http';
import { authSuccess } from '../actions';

const Register = () => {
  const [isDoctor, setIsDoctorParams] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckChange = (e) => {
    setIsDoctorParams(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let fetchUrl = 'http://digidocs-api.herokuapp.com/api/v1/users';
    let userRole = 'users';

    const userData = {
      name, phone, email,
    };

    if (isDoctor) {
      userData.office_address = address;
      userData.is_doctor = isDoctor;
      fetchUrl = 'http://digidocs-api.herokuapp.com/api/v1/doctors';
      userRole = 'doctors';
    }

    const response = await postReq(fetchUrl, userData);

    if (response.status === 201) {
      localStorage.setItem('user', JSON.stringify({ role: userRole, id: response.user }));
      dispatch(authSuccess(true));
      navigate('/');
    }
  };

  const handleInputChange = (data, from) => {
    switch (from) {
      case 'nameInput':
        setName(data.target.value);
        break;
      case 'phoneInput':
        setPhone(data.target.value);
        break;
      case 'emailInput':
        setEmail(data.target.value);
        break;
      case 'addressInput':
        setAddress(data.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Register container pt-4">
      <form className="card mt-5 p-4 offset-md-3 col-md-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <span>UserName</span>
          <input type="text" className="form-control" required placeholder="Name" onChange={(e) => handleInputChange(e, 'nameInput')} aria-describedby="nameHelp" />
        </div>
        <div className="mb-3">
          <span>Phone</span>
          <input type="text" className="form-control" required placeholder="Phone" onChange={(e) => handleInputChange(e, 'phoneInput')} />
        </div>
        <div className="mb-3">
          <span>Email address</span>
          <input type="email" className="form-control" required placeholder="Email" onChange={(e) => handleInputChange(e, 'phoneInput')} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text main-text-color">We&apos;ll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" onChange={(e) => { handleCheckChange(e); }} id="is-doctor-check" />
          <span className="fw-bolder">Are You Regsitering As A Doctor?</span>
        </div>

        {isDoctor ? (
          <div className="mb-3">
            <span>Address</span>
            <input className="form-control" required placeholder="Address" onChange={(e) => handleInputChange(e, 'addressInput')} />
          </div>
        ) : ''}

        <button type="submit" className="btn text-white main-bg-color">Register</button>
        <hr />
        <div className="text-end">
          <span>Already have an account?</span>
          {' '}
          <Link className="main-bg-color text-decoration-none text-white me-2 py-2 px-3" to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
