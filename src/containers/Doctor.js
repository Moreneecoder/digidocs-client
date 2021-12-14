import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';
import { loadDoctor } from '../actions';
import AppointmentModal from './AppointmentModal';

const Doctor = () => {
  const location = useLocation();

  const loggedIn = useSelector((state) => state.user);
  const doctor = useSelector((state) => state.doctor);

  const [doc, setDoc] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    office_address: '',
  });

  if (loggedIn || userAuth()) {
    const { id } = location.state;

    useHttp(
      `http://digidocs-api.herokuapp.com/api/v1/doctors/${id}`,
      loadDoctor,
      [],
    );

    console.log(useSelector((state) => state));

    if (doctor) {
      return (
        <div>
          <h3>
            Name:
            {' '}
            {doctor.name}
          </h3>
          <p className="fw-bolder">
            Description:
            {doctor.description}
          </p>
          <p>
            {doctor.phone}
            {' '}
            |
            {' '}
            {doctor.email}
          </p>
          <p>
            Address:
            {' '}
            <span className="fw-bolder">{doctor.office_address}</span>
          </p>

          <button type="button" onClick={() => setDoc(doctor)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <span><AppointmentModal doctor={doc} /></span>
        </div>
      );
    }
  } else {
    window.location.href = '/login';
  }

  return null;
};

export default Doctor;
