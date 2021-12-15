import '../styles/SideNav.css';

const SideNav = () => (
//   Sidebar
  <div style={{ height: window.screen.availHeight }} className="SideNav border-end bg-white" id="sidebar-wrapper">
    <h2 className="sidebar-heading pb-5 text-center">DigiDocs</h2>
    <div style={{ width: '90%' }} className="list-group list-group-flush fw-bolder text-dark float-end">
      <a className="list-group-item list-group-item-action list-group-item-light pl-1 py-2 text-white bg-success" href="#!">APPOINTMENTS</a>
      <a className="list-group-item list-group-item-action list-group-item-light pl-1 py-2" href="#!">DOCTORS</a>
    </div>
  </div>
);

export default SideNav;
