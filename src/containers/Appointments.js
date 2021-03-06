import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import userAuth from '../helpers/userAuth';
import { getAppointments } from '../helpers/http';
import { loadAppointments } from '../actions';
import { formatDate, formatTime } from '../helpers/time';
import '../styles/Appointments.css';

const Appointments = () => {
  const loggedIn = useSelector((state) => state.user);
  const appointments = useSelector((state) => state.appointments);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (loggedIn || userAuth()) {
    useEffect(() => {
      getAppointments().then((data) => dispatch(loadAppointments(data)));
    }, []);

    if (appointments.length) {
      let idx = 0;
      return (
        <div className="Appointments">
          <div className="col-12 col-md-6 mx-auto text-center mt-5 py-4">
            <h2>YOUR APPOINTMENTS</h2>
            <span className="text-muted">A list of your medical appointments</span>
            <div className="dotted-border col-3 mx-auto pt-4" />
          </div>

          <Link className="btn main-bg-color text-white me-5 mb-2 float-end" to="/doctors">Book Apointment</Link>

          <div className="clearfix" />

          <div className="appointment-lists">
            <div className="appointment-captions main-bg-color text-white d-flex me-5 p-3">
              <span>#</span>
              <span>Title</span>
              <span>Doctor</span>
              <span>Date</span>
              <span>Time</span>
            </div>
            {appointments.map((appointment) => {
              idx += 1;
              return (
                <div key={idx} className="appointment-items d-flex bg-light mt-2 me-5 p-3">
                  <span>
                    {idx}
                    .
                  </span>
                  <span><Link className="app-link text-decoration-none main-text-color" to={`/appointments/${appointment.id}`} state={{ id: appointment.id }}>{appointment.title}</Link></span>
                  <span><Link className="app-link text-decoration-none main-text-color" to={`/doctors/${appointment.doctor.id}`} state={{ id: appointment.doctor.id }}>{appointment.doctor.name}</Link></span>
                  <span>{formatDate(appointment.time)}</span>
                  <span>{formatTime(appointment.time)}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="container col-md-8 mt-5 py-4 text-center">
        <h3 className="alert alert-info">YOU HAVE NO APPOINTMENTS YET!</h3>
        <Link className="btn btn-lg main-bg-color text-white" to="/doctors">Book Apointment</Link>
      </div>
    );
  }

  useEffect(() => {
    navigate('/login');
  },
  [loggedIn]);

  return null;
};

export default Appointments;
