import "../style/section_projects.css";

import { motion } from "framer-motion";

import ProjectsGallery from "./projects_gallery";

const Projects = () => {
  return (
    <>
      <section className="projects-section">
        <ProjectsGallery />
      </section>
    </>
  );
};

export default Projects;
