import { Link } from "react-router-dom";

import "./Link.styles.css";

const LinkComponent = ({ to, title }) => {
  return (
    <Link className="link-container link-container-full-width" to={to}>
      {title}
    </Link>
  );
};

export default LinkComponent;
