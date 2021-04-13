import { useState, Fragment } from "react";
import { Card, Typography } from "@material-ui/core";

import "./styles.scss";

const ProjectCard = ({ name, description, stack, imgSrc, imgGif }) => {
  const [hover, set] = useState(false);

  const handleMouseOver = () => {
    set(true);
  };

  const handleMouseOut = () => {
    set(false);
  };

  // Was not necessary for what was needed
  // const stackElements = stack.split(", ").map((code, index) => {
  //   return (
  //     <Fragment key={index}>
  //       {index !== 0 && (
  //         <Typography style={{ margin: "0px 5px" }}>|</Typography>
  //       )}
  //       <Typography>{code}</Typography>
  //     </Fragment>
  //   );
  // });

  return (
    <div>
      <Card
        className="ProjectCard"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        raised={true}
      >
        <img className="ProjectCard__img" src={hover ? imgGif : imgSrc} />
      </Card>
      <Typography variant="h6">{name}</Typography>
      <Typography className="ProjectCard__stack">
        {stack.replace(/,\s/g, " | ")}
      </Typography>
    </div>
  );
};

export default ProjectCard;
