import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Appointments from './containers/Appointments';
import Doctors from './containers/Doctors';
import Doctor from './containers/Doctor';
import Appointment from './containers/Appointment';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './containers/Logout';
import SideNav from './components/SideNav';
import './styles/App.css';

const App = () => (

  <BrowserRouter>
    <div className="App">
      <div>
        <SideNav />

        <div className="RestOfApp">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Appointments />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/appointments/:appointment_id" element={<Appointment />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:doctor_id" element={<Doctor />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
