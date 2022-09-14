import { useEffect } from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
} from "../assets/images";
import { Footer } from "../components";
import { projectsData } from "../utils/projectsData";

const Projects = () => {
  // useEffect(()=>{})
  return (
    <section className="projects">
      <div className="projects-bio-image">
        <h1 className="text-secondary">My Projects</h1>
      </div>

      <section className="projects-items">
        {projectsData.map((project) => {
          const { url, source, img, id } = project;
          return (
            <div className="projects-item" key={id}>
              <img src={img} alt="My Project" />
              <div className="projects-btns">
                <a href={url} className="projects-btn">
                  <i className="fas fa-eye"></i> Preview
                </a>
                <a href={source} className="projects-btn">
                  <i className="fab fa-github"></i> Github
                </a>
              </div>
            </div>
          );
        })}
        {/* <div className="projects-item">
          <img src={project1} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects-item">
          <img src={project2} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects-item">
          <img src={project3} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects-item">
          <img src={project4} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects-item">
          <img src={project5} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects-item">
          <img src={project6} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
        <div className="projects-item">
          <img src={project7} alt="My Project" />
          <div className="projects-btns">
            <a href="#!" className="projects-btn">
              <i className="fas fa-eye"></i> Preview
            </a>
            <a href="#!" className="projects-btn">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div> */}
      </section>

      <div className="social-icons">
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
      <Footer />
    </section>
  );
};

export default Projects;
