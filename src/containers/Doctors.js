// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';
import { loadDoctors } from '../actions';
// import AppointmentModal from './AppoinmentModal';

const Doctors = () => {
//   const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctors);
//   const userInfo = JSON.parse(localStorage.getItem('user'));

  if (loggedIn || userAuth()) {
    useHttp(`http://digidocs-api.herokuapp.com/api/v1/doctors`,
      loadDoctors,
      []);

    if (doctors.length) {
      console.log(doctors);
      let idx = 0;
      return (
        <div className="Doctors">
          <h1>Doctors</h1>
          {/* <AppointmentModal /> */}

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
