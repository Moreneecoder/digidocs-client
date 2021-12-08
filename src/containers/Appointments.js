import userAuth from '../helpers/userAuth';

const Appointments = () => {
  if (userAuth()) {
    return (
      <div className="Appointments">
        <h1>Appointino</h1>
      </div>
    );
  }

  window.location.href = 'http://localhost:3001/login';
  return null;
};

export default Appointments;
