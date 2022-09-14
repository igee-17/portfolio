import React from "react";
import { SideBcg, Footer } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { flipCard } from "../features/mainSlice";

const Contact = () => {
  const dispatch = useDispatch();
  const { contactCardFlipped } = useSelector((store) => store.main);

  const flip = () => {
    dispatch(flipCard("contactCardFlipped"));
  };

  return (
    <>
      <SideBcg />

      <section className="contact">
        <aside
          // className="glass glass-card"
          className={
            contactCardFlipped
              ? "glass glass-card card-flipped"
              : "glass glass-card"
          }
          onClick={flip}
        >
          <h2>Contact Me</h2>
          <div className="contact-list">
            <div className="contact-item contact-email">
              <i className="fas fa-envelope"></i>
              Email
              <div className="text-secondary">
                <a href="mailto:igbagboleye@gmail.com">igbagboleye@gmail.com</a>
              </div>
            </div>
            <div className="contact-item contact-phone">
              <i className="fas fa-mobile-alt"></i>
              Phone
              <div className="text-secondary">
                <a href="tel:+2347061196917">+(234)70-611-969-17</a>
              </div>
            </div>
            <div className="contact-item contact-address">
              <i className="fas fa-marker"></i>
              Address
              <div className="text-secondary">Ibadan, Nigeria.</div>
            </div>
          </div>
          <aside
            className={
              contactCardFlipped ? "flip-card flip-card-active" : "flip-card"
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
        </aside>

        <footer>
          <div className="social-icons contact-icons">
            <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
          &copy; Copyright
          <span id="copyright">
            <script>
              document .getElementById("copyright")
              .appendChild(document.createTextNode(new Date().getFullYear()));
            </script>
          </span>
          Igbagbo Olaleye
        </footer>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
