import { useState, useEffect } from "react";

const SideBcg = () => {
  const [isActive, setIsActive] = useState(false);

  const setActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(true);
    // const timeout = setTimeout(() => {
    // }, 500);

    // return () => clearTimeout(timeout);

    // setInterval(() => {
    //   setIsActive(!isActive);
    // }, 8000);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsActive(!isActive);
  //   }, 8000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIsActive(!isActive);
    }, 10000);

    return () => clearTimeout(myTimeout);
  }, [isActive]);

  return (
    <section className="side-bcg ">
      <div
        className={isActive ? "side-bcg-center on" : "side-bcg-center"}
        onClick={setActive}
      ></div>
      <div
        className={
          isActive ? "side-bcg-center on second" : "side-bcg-center second"
        }
        onClick={setActive}
      ></div>
      <div
        className={
          isActive ? "side-bcg-center on third" : "side-bcg-center third"
        }
        onClick={setActive}
      ></div>
    </section>
  );
};

export default SideBcg;
