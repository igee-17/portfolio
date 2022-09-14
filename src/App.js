// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  SharedLayout,
  Projects,
  ErrorPage,
} from "./pages";
// import { useSelector } from "react-redux";

function App() {
  // const { isSidebar } = useSelector((store) => store.main);
  // const [sideBag, setSideBag] = useState(false);

  // useEffect(() => {
  //   // console.log(store.getState());
  //   setSideBag(isSidebar);
  //   console.log(sideBag);
  // }, []);

  return (
    <Router>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
