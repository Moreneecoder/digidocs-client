// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { useHttp } from '../hooks/http';
import { loadDoctors } from '../actions';
import AppointmentModal from './AppointmentModal';
import BlackDoctor from '../images/black-doctor.jpeg';
import FemaleDoctor from '../images/doctor-female.jpeg';
import FemaleDoctor1 from '../images/doctor-female-1.jpeg';
import MaleDoctor from '../images/doctor-male.jpeg';
import '../styles/Doctor.css';

const Doctors = () => {
//   const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctors);

  const [doc, setDoc] = useState({
    id: 0,
    name: '',
    phone: '',
    email: '',
    office_address: '',
    image: '',
  });

  if (loggedIn || userAuth()) {
    useHttp('http://digidocs-api.herokuapp.com/api/v1/doctors',
      loadDoctors,
      []);

    if (doctors.length) {
      let idx = 0;
      let imgIndex = 0;
      const images = [BlackDoctor, FemaleDoctor, MaleDoctor, FemaleDoctor1];
      return (
        <div className="Doctors">
          <div className="col-12 col-md-6 mx-auto text-center mt-5 py-4">
            <h2>FIND A MEDICAL EXPERT</h2>
            <span className="text-muted">Book an appointment with a professional doctor with ease!</span>
            <div className="dotted-border col-3 mx-auto pt-4" />
          </div>

          <div className="row container">
            {doctors.map((doctor) => {
              const docImg = images[imgIndex];
              imgIndex += 1;
              if (imgIndex === images.length) imgIndex = 0;

              idx += 1;
              return (

                <div key={idx} className="col-12 col-md-4 mb-5 px-4">
                  <div className="text-center">
                    <img src={docImg} className="img-fluid" alt="doctor" />
                    <p className="fw-bolder mt-4 mb-0">{doctor.name}</p>
                    <div className="dotted-border col-3 mx-auto pt-2" />
                    <span className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
                      doloribus.
                    </span>

                    <div className="mt-2">
                      <button type="button" onClick={() => setDoc({ ...doctor, image: docImg })} className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
                      <Link className="view-doc-btn btn" to={`/doctors/${doctor.id}`} state={{ id: doctor.id }}>View Doctor</Link>
                    </div>
                  </div>
                  <AppointmentModal doctor={doc} />
                </div>
              );
            })}
          </div>
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
