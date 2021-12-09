import { useState } from 'react';

const Register = () => {
  const [showDoctorParams, setShowDoctorParams] = useState(false);

  const handleChange = (e) => {
    setShowDoctorParams(e.target.checked);
  };
  return (
    <div className="Register container">
      {/* onSubmit={(e) => handleSubmit(e)} */}
      <form>
        <input className="form-control mt-1" required placeholder="Name" />
        <input className="form-control mt-1" required placeholder="Phone" />
        <input className="form-control mt-1" required placeholder="Email" />

        <div className="form-check">
          <span className="fw-bolder">Are You Regsitering As A Doctor?</span>
          <input className="form-check-input" type="checkbox" onChange={(e) => { handleChange(e); }} id="is-doctor-check" />
        </div>

        {showDoctorParams ? <input className="form-control mt-1" required placeholder="Address" /> : ''}

        <button type="submit" className="btn btn-success mt-1">Register</button>
      </form>
    </div>
  );
};

export default Register;
