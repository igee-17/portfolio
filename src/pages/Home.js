import { SideBcg, Footer } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { flipCard } from "../features/mainSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { homeCardFlipped } = useSelector((store) => store.main);

  const flip = () => {
    dispatch(flipCard("homeCardFlipped"));
  };

  return (
    <>
      <SideBcg />
      <section className="home">
        <article
          className={
            homeCardFlipped
              ? "glass glass-card card-flipped"
              : "glass glass-card"
          }
          onClick={flip}
        >
          <h2>Hi! I'm</h2>
          <h1 className="home-name">
            Igbagbo <span className="home-name-last">Olaleye</span>
          </h1>
          <aside className="wrapper home-desc">
            <div className="static-txt">
              <ul>
                <li>
                  <span>I'm a</span>
                </li>
                <li>
                  <span className="green">I use</span>
                </li>
              </ul>
            </div>
            <ul className="dynamic-txts">
              <li>
                <span>Web Developer</span>
              </li>
              <li>
                <span>Web Designer</span>
              </li>
              <li>
                <span>Programmer</span>
              </li>
              <li>
                <span className="grey">Angular.js</span>
              </li>
              <li>
                <span className="grey">React.js</span>
              </li>
              <li>
                <span className="grey">Node.js</span>
              </li>
            </ul>
          </aside>
          <aside
            className={
              homeCardFlipped ? "flip-card flip-card-active" : "flip-card"
            }
          >
            <div className="flip-card-icons">
              <a
                href="https://twitter.com/Igee_17"
                target="_blank"
                className="link"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://github.com/igee-17"
                target="_blank"
                className="link"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/igbagbo-olaleye/"
                target="_blank"
                className="link"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </aside>
        </article>
        <div className="social-icons">
          <a href="https://twitter.com/Igee_17" target="_blank">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://github.com/igee-17" target="_blank">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/igbagbo-olaleye/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Home;
