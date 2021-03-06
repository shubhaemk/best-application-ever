import { useState } from "react";
import { useLocation } from "react-router-dom";
import LinkComponent from "../LinkComponent/Link.component";

import { NAVBAR_ITEM_LIST } from "../../services/constant";

import "./Navbar.styles.css";

const NavbarComponent = (props) => {
  const { pathname } = useLocation();
  const [currentItem, setCurrentItem] = useState(pathname);

  return (
    <div className="navbar-container">
      {NAVBAR_ITEM_LIST.map(({ id, to, title, extraData }) => (
        <div
          key={id}
          className={`navbar-item ${
            currentItem === to && "navbar-item-selected"
          }`}
          onClick={() => to !== currentItem && setCurrentItem(to)}
        >
          <LinkComponent to={`${to}${extraData || ""}`} title={title} />
        </div>
      ))}
    </div>
  );
};

export default NavbarComponent;
