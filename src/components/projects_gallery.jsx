import React, { useRef, useEffect, useState } from "react";

import "../style/projects_gallery.css";

import img1 from "../images/screens/1.png";
import img2 from "../images/screens/2.png";
import img3 from "../images/screens/3.png";

import { motion } from "framer-motion";

const ProjectGallery = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 150);
  }, []);

  const projects = [
    {
      id: 1,
      name: "First Portfolio",
      image: img1,
      link: "https://github.com/Sagittarius-py/Portfolio-One",
      active: true,
    },
    {
      id: 2,
      name: "Second Portfolio",
      image: img2,
      link: "https://github.com/Sagittarius-py/Portfolio-Two",
      active: false,
    },
    {
      id: 3,
      name: "Third Portfolio",
      image: img3,
      link: "https://github.com/Sagittarius-py/Portfolio-Three",
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
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <>
      <div className="project-carousel">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {projects.map((project) => {
              return (
                <motion.div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="item"
                  key={project.id}
                >
                  <div className="item-content">
                    <p
                      className="name"
                      onClick={() => openInNewTab(project.link)}
                    >
                      {project.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectGallery;
