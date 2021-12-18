// // // import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';
import { loadAppointments } from '../actions';
import { formatDate, formatTime } from '../helpers/time';
import '../styles/Appointments.css';

const Appointments = () => {
//   const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user);
  const appointments = useSelector((state) => state.appointments);
  const userInfo = JSON.parse(localStorage.getItem('user'));

  if (loggedIn || userAuth()) {
    useHttp(`http://digidocs-api.herokuapp.com/api/v1/${userInfo.role}/${userInfo.id}/appointments`,
      loadAppointments,
      []);

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
            {appointments.map((data) => {
              idx += 1;
              return (
                <div key={idx} className="appointment-items d-flex bg-light mt-2 me-5 p-3">
                  <span>
                    {idx}
                    .
                  </span>
                  <span><Link className="app-link text-decoration-none main-text-color" to={`/appointments/${data.appointment.id}`} state={{ id: data.appointment.id }}>{data.appointment.title}</Link></span>
                  <span><Link className="app-link text-decoration-none main-text-color" to={`/doctors/${data.doctor.id}`} state={{ id: data.doctor.id }}>{data.doctor.name}</Link></span>
                  <span>{formatDate(data.appointment.time)}</span>
                  <span>{formatTime(data.appointment.time)}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // return 'YOU HAVE NO APPOINTMENTS YET!';
    return (
      <div>
        {formatDate('2021-12-09T20:49:21.808Z')}
        {' '}
        {formatTime('2021-12-09T20:49:21.808Z')}
      </div>
    );
  }

  //   navigate('/register');
  window.location.href = '/login';
  return null;
};

export default Appointments;
