import React, { useState } from "react";

import "../style/projects_gallery.css";

import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectGallery = () => {
  const [active, setActve] = useState(1);
  const [projects, setProjects] = useState({
    projects: [
      {
        id: 1,
        name: "first",
        link: "http://...",
        active: true,
      },
      {
        id: 2,
        name: "seccound",
        link: "http://...",
        active: false,
      },
      {
        id: 3,
        name: "third",
        link: "http://...",
        active: false,
      },
      {
        id: 4,
        name: "fourth",
        link: "http://...",
        active: false,
      },
      {
        id: 5,
        name: "fivth",
        link: "http://...",
        active: false,
      },
      {
        id: 6,
        name: "sixth",
        link: "http://...",
        active: false,
      },
    ],
  });

  const prev = () => {
    setActve(active - 1);
  };
  const next = () => {
    setActve(active + 1);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="projects-container"
      >
        {active !== 1 ? (
          <button className="project-btn prev-btn" onClick={prev}>
            Previous
          </button>
        ) : null}
        {active !== 6 ? (
          <button className="project-btn next-btn" onClick={next}>
            Next
          </button>
        ) : null}
        <div className="projects-inner-content">
          {projects.projects.map((project) => {
            if (project.id === active - 1) {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  classes="prev inactive"
                />
              );
            }
            if (project.id === active) {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  classes="active"
                />
              );
            }
            if (project.id === active + 1) {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  classes="next inactive"
                />
              );
            }
            return null;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectGallery;
