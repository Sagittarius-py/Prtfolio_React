import "../style/ProjectCard.css";

const ProjectCard = (props) => {
  let classes = "project-frame  " + props.classes;
  return (
    <div className={classes} id={props.name}>
      <h1>{props.name}</h1>
    </div>
  );
};

export default ProjectCard;
