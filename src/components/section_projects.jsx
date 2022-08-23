import "../style/section_projects.css";
import { useRef } from "react";
import useIsInViewport from "./isVisible";

import ProjectsGallery from "./projects_gallery";

const Projects = (props) => {
  const ref3 = useRef(null);
  let isVisible3 = useIsInViewport(ref3);
  props.changeVisibility("projectsSection", isVisible3);

  return (
    <>
      <section className="projects-section" ref={ref3}>
        <h1 className="projects-title">Swipe</h1>
        <a name="projects" />
        <ProjectsGallery />
      </section>
    </>
  );
};

export default Projects;
