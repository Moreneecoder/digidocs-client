import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Standings from './containers/Appointments';

const App = () => (
  <BrowserRouter>
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Standings />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
