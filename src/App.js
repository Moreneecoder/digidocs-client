import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Appointments from './containers/Appointments';
import Appointment from './containers/Appointment';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './containers/Logout';

const App = () => (

  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
