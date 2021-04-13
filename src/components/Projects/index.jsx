import { Container } from "@material-ui/core";

import ProjectCard from "./ProjectCard";
import data from "../../data";
import "./styles.scss";

const ProjectList = (props) => {
  return (
    <div className="ProjectList">
      {data.projects.map((project) => (
        <ProjectCard
          name={project.name}
          stack={project.stack}
          imgSrc={project.imageSrc}
          imgGif={project.gifSrc}
        />
      ))}
    </div>
  );
};

export default ProjectList;
