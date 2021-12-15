import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';
import { loadAppointment } from '../actions';

const Appointment = () => {
  const location = useLocation();

  const loggedIn = useSelector((state) => state.user);
  const appointment = useSelector((state) => state.appointment);
  const userInfo = JSON.parse(localStorage.getItem('user'));

  if (loggedIn || userAuth()) {
    const { id } = location.state;

    useHttp(
      `http://digidocs-api.herokuapp.com/api/v1/${userInfo.role}/${userInfo.id}/appointments/${id}`,
      loadAppointment,
      [],
    );

    if (appointment) {
      return (
        <div>
          <h3>
            Title:
            {' '}
            {appointment.appointment.title}
          </h3>
          <p className="fw-bolder">
            Description:
            {appointment.appointment.description}
          </p>
          <p>
            Doctor:
            {' '}
            <Link to={`/doctors/${appointment.doctor.id}`} state={{ id: appointment.doctor.id }}>{appointment.doctor.name}</Link>
            {' '}
            |
            {' '}
            {appointment.doctor.phone}
            {' '}
            |
            {' '}
            {appointment.doctor.email}
          </p>
          <p>
            Address:
            {' '}
            <span className="fw-bolder">{appointment.doctor.office_address}</span>
          </p>
          <p>
            Time:
            {' '}
            {appointment.appointment.time}
          </p>
        </div>
      );
    }
  } else {
    window.location.href = '/login';
  }

  return null;
};

export default Appointment;
