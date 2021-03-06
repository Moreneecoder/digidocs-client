import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { createAppointment } from '../helpers/http';

const AppointmentModal = (props) => {
  const { doctor } = props;

  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const User = JSON.parse(localStorage.getItem('user'));

  const handleInputChange = (data, from) => {
    switch (from) {
      case 'timeInput':
        setTime(data.target.value);
        break;
      case 'titleInput':
        setTitle(data.target.value);
        break;
      case 'descInput':
        setDesc(data.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e, user) => {
    e.preventDefault();

    const appDetails = {
      doctor_id: doctor.id,
      title,
      description: desc,
      time,
    };

    createAppointment(user, appDetails);
  };

  return (
    <div className="AppointmentModal">
      <div className="modal fade" id="AppointmentModal" tabIndex="-1" aria-labelledby="AppointmentModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <form onSubmit={(e) => handleSubmit(e, User)}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AppointmentModalLabel">
                  Book Appointment With
                  {' '}
                  <span>{doctor.name || ''}</span>
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-2">
                    <img className="img-thumbnail" src={doctor.image} alt="man-avatar" />
                  </div>
                  <div className="col-10">
                    <p>
                      Email:
                      {' '}
                      {doctor.email || ''}
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum quo pariatur expedita possimus labore, hic
                      laudantium dicta soluta rerum et illo explicabo vel repellat
                      odio voluptatibus temporibus officia ab non.
                    </p>
                  </div>
                </div>
                <hr />
                <span className="fw-bolder">Title:</span>
                <input className="form-control" onChange={(e) => handleInputChange(e, 'titleInput')} required />
                <span className="fw-bolder">Description:</span>
                <textarea className="form-control" onChange={(e) => handleInputChange(e, 'descInput')} required />
                <span className="fw-bolder">Pick A Date:</span>
                <input type="datetime-local" className="form-control" onChange={(e) => handleInputChange(e, 'timeInput')} required />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn px-3 main-bg-color text-white">Book</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AppointmentModal.defaultProps = {
  doctor: {
    id: 0,
    name: '',
    phone: '',
    email: '',
    office_address: '',
    image: '',
  },
};

AppointmentModal.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    office_address: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default AppointmentModal;
