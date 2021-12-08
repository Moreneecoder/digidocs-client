import userAuth from '../helpers/userAuth';

const Appointments = () => {
  if (userAuth()) {
    return (
      <div className="Appointments">
        <h1>Appointino</h1>
      </div>
    );
  }

  return 'YOU GATS LOGIN';
};

export default Appointments;
