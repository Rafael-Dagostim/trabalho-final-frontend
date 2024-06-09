import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function NavButton({ label, path }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button className="nav-button" onClick={handleClick}>
      {label}
    </button>
  );
}

NavButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
