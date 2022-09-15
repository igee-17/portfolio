import { Link } from "react-router-dom";
import { navData } from "../utils/navData";
import { RiHome4Line } from "react-icons/ri";

const SideNav = () => {
  return (
    <div className="side-nav">
      {navData.map((item, index) => {
        const { text, icon, path, shortText } = item;
        return (
          <Link to={path} className="side-nav-item" key={index}>
            <p
              className="before
            "
            >
              {shortText || text}
            </p>
            {/* <FontAwesomeIcon icon={icon} /> */}
            {/* <i className={`${icon}`}></i> */}
            {/* <i className="fab fa-github fa-2x"></i> */}
            <RiHome4Line />
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
