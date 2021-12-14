import '../styles/SideNav.css';

const SideNav = () => (
//   Sidebar
  <div className="SideNav border-end bg-white" id="sidebar-wrapper">
    <h1 className="sidebar-heading border-bottom bg-light">DigiDocs</h1>
    <div className="list-group list-group-flush">
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Dashboard</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Shortcuts</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Overview</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Events</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Profile</a>
      <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
    </div>
  </div>
);

export default SideNav;
