import { SideBcg, Footer } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { flipCard } from "../features/mainSlice";

const About = () => {
  const dispatch = useDispatch();
  const { aboutCardFlipped } = useSelector((store) => store.main);

  const flip = () => {
    dispatch(flipCard("aboutCardFlipped"));
  };

  return (
    <>
      <SideBcg />

      <section className="about">
        <div className="about-bio-image">
          <div
            className={
              aboutCardFlipped
                ? "about-bio glass-card card-flipped"
                : "about-bio glass-card"
            }
            onClick={flip}
          >
            <h2 className="text-secondary">BIO</h2>
            <p>
              I'm an ambitious and humble web developer and designer from
              Ibadan, Nigeria.
              <br />
              <br />
              When not working a role, I spend most of my day working on side
              projects, experimenting with JavaScript and its endless list of
              frameworks.
              <br />
              <br />
              Here you'll find some of the projects I've done. One of them being
              a job tracker, built to help job applicants keep record of their
              job applications.
              <br />
              <br />I hope you find some of it relevant/useful and feel free to
              contact me. Iʼm always up for a beer or coffee.
            </p>
            <aside
              className={
                aboutCardFlipped ? "flip-card flip-card-active" : "flip-card"
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
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default About;
