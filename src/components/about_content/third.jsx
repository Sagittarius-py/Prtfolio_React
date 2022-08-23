import { height } from "@mui/system";
import "../../style/about_content/third.css";

const skills = [
  { name: "HTML", progress: 90 },
  { name: "CSS", progress: 80 },
  { name: "JavaScript", progress: 75 },
  { name: "React", progress: 60 },
  { name: "Git", progress: 60 },
];

const Third = () => {
  return (
    <>
      <div className="third-content">
        <h1 className="third-title">My skills & What I'm working with</h1>

        <div className="third-inner-content">
          <div className="all-bar-container">
            {skills.map((skill) => {
              return (
                <div
                  className="progress-bar-container"
                  onInvalid={skill.name}
                  key={skill.name}
                >
                  <div className="progress-bar">
                    <div
                      className="progress-bar-progress"
                      id={skill.name + "-progress"}
                      style={{ height: skill.progress + "%" }}
                    />
                  </div>
                  <p className="bar-label" for={skill.name}>
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="additional-info-container">
            <h3>Additionally</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
