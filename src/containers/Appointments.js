// // import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import userAuth from '../helpers/userAuth';
// import { useHttp } from '../hooks/http';
// import { loadAppointments } from '../actions';
import '../styles/Appointments.css';
import BlackDoctor from '../images/black-doctor.jpeg';
import FemaleDoctor from '../images/doctor-female.jpeg';
import FemaleDoctor1 from '../images/doctor-female-1.jpeg';
import MaleDoctor from '../images/doctor-male.jpeg';

// const Appointments = () => {
// //   const navigate = useNavigate();
//   const loggedIn = useSelector((state) => state.user);
//   const appointments = useSelector((state) => state.appointments);
//   const userInfo = JSON.parse(localStorage.getItem('user'));

//   if (loggedIn || userAuth()) {
//     useHttp(`http://digidocs-api.herokuapp.com/api/v1/${userInfo.role}/${userInfo.id}/appointments`,
//       loadAppointments,
//       []);

//     if (appointments.length) {
//       let idx = 0;
//       return (
//         <div className="Appointments">
//           <h1>Appointino</h1>
//           <Link className="btn btn-primary" to="/doctors">Book Apointment</Link>
//           {/* <AppointmentModal /> */}

//           {appointments.map((data) => {
//             idx += 1;
//             return (
//               <div key={idx}>
//                 <span>
//                   <Link
//                 //   index={rank}
//                     to={`/appointments/${data.appointment.id}`}
//                     state={{ id: data.appointment.id }}
//                   >
//                     {data.appointment.title}
//                   </Link>
//                 </span>
//                 {' '}
// &nbsp;
//                 <span>{data.doctor.name}</span>
//                 {' '}
// &nbsp;
//                 <span>{data.appointment.time}</span>
//               </div>
//             );
//           })}

//         </div>
//       );
//     }

//     return 'YOU HAVE NO APPOINTMENTS YET!';
//   }

//   //   navigate('/register');
//   window.location.href = '/login';
//   return null;
// };

const Appointments = () => (
  <div className="Appointments">
    <div className="col-12 col-md-6 mx-auto text-center mt-5 py-4">
      <h2>FIND A MEDICAL EXPERT</h2>
      <span className="text-muted">Book an appointment with a professional doctor with ease!</span>
      <div className="dotted-border col-3 mx-auto pt-4" />
    </div>

    <div className="row container">
      <div className="col-12 col-md-4 text-center mb-5 px-3">
        <img src={BlackDoctor} className="img-fluid" alt="doctor" />
        <p className="fw-bolder mt-4 mb-0">DOCTOR WON</p>
        <div className="dotted-border col-3 mx-auto pt-2" />
        <span className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
          doloribus.
        </span>
        <div className="mt-2">
          <button type="button" className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <Link className="btn btn-primary" to="/doctors/1">View Doctor</Link>
        </div>
      </div>
      <div className="col-12 col-md-4 text-center mb-5 px-3">
        <img src={FemaleDoctor} className="img-fluid" alt="doctor" />
        <p className="fw-bolder mt-4 mb-0">DOCTOR YU</p>
        <div className="dotted-border col-3 mx-auto pt-2" />
        <span className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
          doloribus.
        </span>
        <div className="mt-2">
          <button type="button" className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <Link className="btn btn-primary" to="/doctors/1">View Doctor</Link>
        </div>
      </div>
      <div className="col-12 col-md-4 text-center mb-5 px-3">
        <img src={MaleDoctor} className="img-fluid" alt="doctor" />
        <p className="fw-bolder mt-4 mb-0">DOCTOR MI</p>
        <div className="dotted-border col-3 mx-auto pt-2" />
        <span className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
          doloribus.
        </span>
        <div className="mt-2">
          <button type="button" className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <Link className="btn btn-primary" to="/doctors/1">View Doctor</Link>
        </div>
      </div>
      <div className="col-12 col-md-4 text-center mb-5 px-3">
        <img src={FemaleDoctor1} className="img-fluid" alt="doctor" />
        <p className="fw-bolder mt-4 mb-0">DOCTOR WI</p>
        <div className="dotted-border col-3 mx-auto pt-2" />
        <span className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
          doloribus.
        </span>
        <div className="mt-2">
          <button type="button" className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <Link className="btn btn-primary" to="/doctors/1">View Doctor</Link>
        </div>
      </div>

      <div className="col-12 col-md-4 text-center mb-5 px-3">
        <img src={BlackDoctor} className="img-fluid" alt="doctor" />
        <p className="fw-bolder mt-4 mb-0">DOCTOR HI</p>
        <div className="dotted-border col-3 mx-auto pt-2" />
        <span className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
          doloribus.
        </span>
        <div className="mt-2">
          <button type="button" className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <Link className="btn btn-primary" to="/doctors/1">View Doctor</Link>
        </div>
      </div>

      <div className="col-12 col-md-4 text-center mb-5 px-3">
        <img src={FemaleDoctor} className="img-fluid" alt="doctor" />
        <p className="fw-bolder mt-4 mb-0">DOCTOR US</p>
        <div className="dotted-border col-3 mx-auto pt-2" />
        <span className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
          doloribus.
        </span>
        <div className="mt-2">
          <button type="button" className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
          <Link className="btn btn-primary" to="/doctors/1">View Doctor</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Appointments;
