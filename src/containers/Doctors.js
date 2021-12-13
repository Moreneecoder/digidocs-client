// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';
import { loadDoctors } from '../actions';
import AppointmentModal from './AppointmentModal';

const Doctors = () => {
//   const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctors);
  //   const userInfo = JSON.parse(localStorage.getItem('user'));
  const [doc, setDoc] = useState('');

  if (loggedIn || userAuth()) {
    useHttp('http://digidocs-api.herokuapp.com/api/v1/doctors',
      loadDoctors,
      []);

    // const getDoctor = (doc) => doc;

    if (doctors.length) {
      console.log(doctors);
      let idx = 0;
      return (
        <div className="Doctors">
          <h1>Doctors</h1>

          {doctors.map((doctor) => {
            idx += 1;
            return (
              <div key={idx}>
                <span>{doctor.name}</span>
                {' '}
&nbsp;
                <span>{doctor.phone}</span>
                {' '}
&nbsp;
                <span>{doctor.email}</span>
                {' '}
&nbsp;
                <button type="button" onClick={() => setDoc(doctor)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
                <span><AppointmentModal doctor={doc} /></span>
                <span>
                  <Link className="btn btn-success" to={`/doctor/${doctor.id}`}>View Doctor</Link>
                </span>

              </div>
            );
          })}

        </div>
      );
    }

    return "COULDN'T LOAD DOCTORS";
  }

  //   navigate('/register');
  window.location.href = '/login';
  return null;
};

export default Doctors;
