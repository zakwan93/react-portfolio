import React, { Component } from "react";
import Pdf from "../../../assets/Zakwan_FullStack.pdf";
import classes from "./Resume.scss";

class Resume extends Component {
  render() {
    return (
      <div className={classes.Resume}>
        <a href={Pdf} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    );
  }
}

export default Resume;
