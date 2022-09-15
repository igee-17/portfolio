import { Footer } from "../components";
import { projectsData } from "../utils/projectsData";

const Projects = () => {
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
