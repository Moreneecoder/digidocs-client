import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './containers/Navbar';
import Appointments from './containers/Appointments';
import Register from './containers/Register';
// import userAuth from './helpers/userAuth';

const App = () => (
  // let appointmentlink = '/login';

  // if (userAuth()) {
  //   console.log(userAuth());
  //   appointmentlink = '/';
  // }

  // return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Appointments />} />
        <Route path="/login" element={<Register />} />
      </Routes>
    </div>
  </BrowserRouter>
  // );
);

export default App;
