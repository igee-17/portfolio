import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      {/* <SideNav /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
