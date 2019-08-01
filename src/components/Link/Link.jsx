import React from "react";
import classes from "./Link.scss";

const Resume = props => {
  return (
    <div className={classes.Resume}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.name}
      </a>
    </div>
  );
};

export default Resume;
