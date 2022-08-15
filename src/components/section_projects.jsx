import "../style/section_projects.css";
import { useRef } from "react";
import useIsInViewport from "./isVisible";
import { motion } from "framer-motion";

import ProjectsGallery from "./projects_gallery";

const Projects = (props) => {
  const ref3 = useRef(null);
  let isVisible3 = useIsInViewport(ref3);
  props.changeVisibility("projectsSection", isVisible3);

  return (
    <>
      <section className="projects-section" ref={ref3}>
        <a name="projects" />
        <ProjectsGallery />
      </section>
    </>
  );
};

export default Projects;
