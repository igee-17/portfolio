import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, SideBcg, SideNav } from "../components";
import { useDispatch } from "react-redux";
import { resetCard } from "../features/mainSlice";
// import { store } from "../store";

const SharedLayout = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(flipCard(false));
  //   dispatch(resetCard);
  // }, []);

  return (
    <>
      <Navbar />
      {/* <SideNav /> */}
      <main>
        {/* {side && <SideBcg />} */}
        {/* <SideBcg /> */}
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
