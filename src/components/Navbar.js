import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../utils/navData";
// import { useDispatch } from "react-redux";
// import { setSideBackground } from "../features/mainSlice";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <>
      <header>
        <div className="menu-btn" onClick={() => setIsSidebar(!isSidebar)}>
          <span
            className={isSidebar ? "menu-btn-burger open" : "menu-btn-burger"}
          ></span>
        </div>

        <nav className={isSidebar ? "nav open" : "nav"}>
          <ul className={isSidebar ? "menu-nav open" : "menu-nav"}>
            {navData.map((item, index) => {
              const { text, path, sideBcg } = item;
              return (
                <li
                  className={
                    isSidebar ? "menu-nav-item open" : "menu-nav-item "
                  }
                  key={index}
                  onClick={() => setIsSidebar(false)}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "menu-nav-link active" : "menu-nav-link"
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
