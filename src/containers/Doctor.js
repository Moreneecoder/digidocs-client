import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userAuth from '../helpers/userAuth';
import { getDoctor } from '../hooks/http';
import { loadDoctor } from '../actions';
import AppointmentModal from './AppointmentModal';

const Doctor = () => {
  const location = useLocation();

  const loggedIn = useSelector((state) => state.user);
  const doctor = useSelector((state) => state.doctor);

  const dispatch = useDispatch();

  const [idx, setIdx] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [officeAdd, setOfficeAdd] = useState('');
  const [img, setImg] = useState('');

  const handleDoctorData = (data, Img) => {
    setIdx(data.id);
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
    setOfficeAdd(data.office_address);
    setImg(Img);
  };

  if (loggedIn || userAuth()) {
    const { id, image } = location.state;

    useEffect(() => {
      getDoctor(id).then((data) => dispatch(loadDoctor(data)));
    }, []);

    if (doctor) {
      return (
        <div className="Doctor">
          <div className="row mb-5 mt-5 p-4">
            <div className="col-12 col-md-7">
              <img src={image} className="img-fluid" alt="doctor" />
            </div>

            <div className="col-12 offset-md-1 col-md-4 pe-3">
              <h4 className="text-end">{doctor.name.toUpperCase()}</h4>
              <p className="text-muted text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio officiis, dolores at laborum alias quae illum. Aspernatur,
                doloribus.
              </p>
              <div className="bg-grey py-2 px-3">
                <p className="float-start m-0">Email:</p>
                <p className="float-end m-0">{doctor.email}</p>
                <div className="clearfix" />
              </div>
              <div className="py-2 px-3">
                <p className="float-start m-0">Phone:</p>
                <p className="float-end m-0">{doctor.phone}</p>
                <div className="clearfix" />
              </div>

              <div className="bg-grey py-2 px-3">
                {/* <p className="float-start m-0">Address:</p> */}
                <p className="m-0">{doctor.office_address}</p>
                <div className="clearfix" />
              </div>
              <button type="button" onClick={() => handleDoctorData(doctor, image)} className="btn main-bg-color text-white py-2 px-3 mt-4 rounded-pill float-end" data-bs-toggle="modal" data-bs-target="#AppointmentModal">
                {' '}
                Book Appointment
              </button>
              <span>
                <AppointmentModal doctor={{
                  id: idx, name, phone, email, office_address: officeAdd, image: img,
                }}
                />
              </span>
            </div>
          </div>

        </div>
      );
    }
  } else {
    window.location.href = '/login';
  }

  return null;
};

export default Doctor;
