import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Appointments from './containers/Appointments';
import Register from './containers/Register';
import Login from './containers/Login';

const App = () => (

  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
