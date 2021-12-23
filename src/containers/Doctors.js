import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { getDoctors } from '../hooks/http';
import { loadDoctors } from '../actions';
import AppointmentModal from './AppointmentModal';
import BlackDoctor from '../images/black-doctor.jpeg';
import FemaleDoctor from '../images/doctor-female.jpeg';
import FemaleDoctor1 from '../images/doctor-female-1.jpeg';
import MaleDoctor from '../images/doctor-male.jpeg';
import '../styles/Doctors.css';

const Doctors = () => {
  const loggedIn = useSelector((state) => state.user);
  const doctors = useSelector((state) => state.doctors);

  const dispatch = useDispatch();

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [officeAdd, setOfficeAdd] = useState('');
  const [image, setImage] = useState('');

  const handleDoctorData = (data, img) => {
    setId(data.id);
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
    setOfficeAdd(data.office_address);
    setImage(img);
  };

  if (loggedIn || userAuth()) {
    useEffect(() => {
      getDoctors().then((data) => dispatch(loadDoctors(data)));
    }, []);

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
                      <button type="button" onClick={() => handleDoctorData(doctor, docImg)} className="btn main-bg-color text-white me-2" data-bs-toggle="modal" data-bs-target="#AppointmentModal">Book Appointment</button>
                      <Link className="view-doc-btn btn" to={`/doctors/${doctor.id}`} state={{ id: doctor.id, image: docImg }}>View Doctor</Link>
                    </div>
                  </div>
                  <AppointmentModal doctor={{
                    id, name, phone, email, office_address: officeAdd, image,
                  }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="container col-md-8 mt-5 py-4 text-center">
        <h3 className="alert alert-info">COULD&apos;T LOAD DOCTORS</h3>
        <button type="button" onClick={() => window.location.reload()} className="text-white btn btn-md btn-md-lg main-bg-color">&#8635; Refresh Page</button>
      </div>
    );
  }

  window.location.href = '/login';
  return null;
};

export default Doctors;
