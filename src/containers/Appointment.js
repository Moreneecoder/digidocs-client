import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { getAppointment } from '../helpers/http';
import { loadAppointment } from '../actions';
import { formatDate, formatTime } from '../helpers/time';
import MedicalImg1 from '../images/medical_care.svg';
import MedicalImg2 from '../images/medicine.svg';

const Appointment = () => {
  const location = useLocation();

  const loggedIn = useSelector((state) => state.user);
  const appointment = useSelector((state) => state.appointment);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (loggedIn || userAuth()) {
    const { id } = location.state;

    useEffect(() => {
      getAppointment(id).then((data) => dispatch(loadAppointment(data)));
    }, []);

    if (appointment) {
      return (
        <div className="Appointment">
          <div className="col-12 col-md-6 mx-auto text-center mt-5 py-4">
            <h2>APPOINTMENT</h2>
            <span className="text-muted">A detailed view of an appointment</span>
            <div className="dotted-border col-3 mx-auto pt-4" />
          </div>
          <div className="row mb-5 p-4">
            <div className="d-none d-lg-block col-12 col-lg-3 align-self-center">
              <img src={MedicalImg1} className="img-fluid" alt="doctor" />
            </div>

            <div className="offset-3 col-6 offset-lg-1 col-lg-3 align-self-center">
              <img src={MedicalImg2} className="img-fluid" alt="doctor" />
            </div>

            <div className="col-12 offset-lg-1 col-lg-4 pe-3">
              <h4 className="text-center text-lg-end">{appointment.title.toUpperCase()}</h4>
              <p className="text-muted text-center text-lg-end">
                {appointment.description}
              </p>
              <div className="bg-grey py-2 px-3">
                <p className="float-start m-0">Doctor:</p>
                <Link className="float-end m-0 text-decoration-none main-text-color app-link" to={`/doctors/${appointment.doctor.id}`} state={{ id: appointment.doctor.id }}>{appointment.doctor.name}</Link>
                <div className="clearfix" />
              </div>
              <div className="py-2 px-3">
                <p className="float-start m-0">Phone:</p>
                <p className="float-end m-0">{appointment.doctor.phone}</p>
                <div className="clearfix" />
              </div>

              <div className="bg-grey py-2 px-3">
                <p className="float-start m-0">Date:</p>
                <p className="float-end m-0">
                  {formatDate(appointment.time)}
                </p>
                <div className="clearfix" />
              </div>

              <div className="py-2 px-3">
                <p className="float-start m-0">Time:</p>
                <p className="float-end m-0">
                  {formatTime(appointment.time)}
                </p>
                <div className="clearfix" />
              </div>

              <div className="bg-grey py-2 px-3">
                <p className="m-0">{appointment.doctor.office_address}</p>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  useEffect(() => {
    navigate('/login');
  },
  [loggedIn]);

  return null;
};

export default Appointment;
