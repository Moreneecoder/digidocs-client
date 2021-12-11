// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';

const Appointments = () => {
//   const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user);
  const appointments = useSelector((state) => state.appointments);
  const userInfo = JSON.parse(localStorage.getItem('user'));

  if (loggedIn || userAuth()) {
    useHttp(`http://digidocs-api.herokuapp.com/api/v1/${userInfo.role}/${userInfo.id}/appointments`, []);

    if (appointments.length) {
      let idx = 0;
      return (
        <div className="Appointments">
          <h1>Appointino</h1>
          {appointments.map((data) => {
            idx += 1;
            return (
              <div key={idx}>
                <span>{data.appointment.title}</span>
                {' '}
&nbsp;
                <span>{data.doctor.name}</span>
                {' '}
&nbsp;
                <span>{data.appointment.time}</span>
              </div>
            );
          })}
        </div>
      );
    }

    return 'YOU HAVE NO APPOINTMENTS YET!';
  }

  //   navigate('/register');
  window.location.href = '/login';
  return null;
};

export default Appointments;
