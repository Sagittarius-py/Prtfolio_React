import React, { useState } from "react";

import "../style/projects_gallery.css";

// make a slider with project iframes
// or at least screanshots, i hope i
// will understand what i did written
// the previous day

const ProjectGallery = () => {
  const [state, setState] = useState({
    active: 1,
    howMany: 2,
    projects: [
      {
        id: 1,
        name: "first",
        link: "http://...",
      },
      {
        id: 2,
        name: "first",
        link: "http://...",
      },
    ],
  });

  return (
    <>
      <div className="projects-container">
        {state.projects.map((project) => (
          <div className="project-frame" id={project.name}></div>
        ))}
      </div>
    </>
  );
};

export default ProjectGallery;
