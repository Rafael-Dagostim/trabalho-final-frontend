import { PropTypes } from "prop-types";
import { Outlet } from "react-router-dom";

import "./style.css";
import NavButton from "./components/NavButton";

export default function NavBar({ routes = [] }) {
  return (
    <div className="page">
      <div className="nav">
        <h2>CRUD com JSON Server</h2>
        <div className="nav-button-group">
          {routes.map((route) => (
            <NavButton key={route.path} label={route.label} path={route.path} />
          ))}
        </div>
      </div>
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};
