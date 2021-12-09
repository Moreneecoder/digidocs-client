import { useState } from 'react';
import { registerUser } from '../hooks/http';

const Register = () => {
  const [isDoctor, setIsDoctorParams] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleCheckChange = (e) => {
    setIsDoctorParams(e.target.checked);
  };

  const handleSubmit = (e) => {
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

    registerUser(fetchUrl, userData);
    console.log(userData);
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
