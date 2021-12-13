import { PropTypes } from 'prop-types';

const AppointmentModal = (props) => {
  console.log(props);
  const { doctor } = props;

  return (
    <div className="AppointmentModal">
      <div className="modal fade" id="AppointmentModal" tabIndex="-1" aria-labelledby="AppointmentModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AppointmentModalLabel">
                Book Appointment With
                {' '}
                {console.log(doctor)}
                <span>{doctor.name || ''}</span>
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AppointmentModal.defaultProps = {
  doctor: {},
};

AppointmentModal.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    office_address: PropTypes.string.isRequired,
  }),
};

// AppointmentModal.propTypes = {
//   doctor: PropTypes.func.isRequired,
// };

export default AppointmentModal;
