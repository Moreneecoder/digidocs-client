import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../hooks/http';
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

    const userData = {
      name, phone, email,
    };

    console.log(isDoctor);
    if (isDoctor) {
      userData.office_address = address;
      userData.is_doctor = isDoctor;
      fetchUrl = 'http://digidocs-api.herokuapp.com/api/v1/doctors';
    }

    const response = await auth(fetchUrl, userData);
    console.log(response);
    if (response.status === 201) {
      localStorage.setItem('user', response.user);
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
    <div className="Register container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input className="form-control mt-1" required placeholder="Name" onChange={(e) => handleInputChange(e, 'nameInput')} />
        <input className="form-control mt-1" required placeholder="Phone" onChange={(e) => handleInputChange(e, 'phoneInput')} />
        <input className="form-control mt-1" required placeholder="Email" onChange={(e) => handleInputChange(e, 'emailInput')} />

        <div className="form-check">
          <span className="fw-bolder">Are You Regsitering As A Doctor?</span>
          <input className="form-check-input" type="checkbox" onChange={(e) => { handleCheckChange(e); }} id="is-doctor-check" />
        </div>

        {isDoctor ? <input className="form-control mt-1" required placeholder="Address" onChange={(e) => handleInputChange(e, 'addressInput')} /> : ''}

        <button type="submit" className="btn btn-success mt-1">Register</button>
      </form>
    </div>
  );
};

export default Register;
