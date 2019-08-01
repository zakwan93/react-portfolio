import React from "react";
import Classes from "./Backdrop.scss";

const backdrop = props =>
  props.show ? (
    <div className={Classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
