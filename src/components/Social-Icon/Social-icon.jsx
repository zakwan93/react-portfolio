import React from "react";

import classes from "./Social-icon.scss";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

const SocialIcon = () => {
  return (
    <div className={classes.sidebar}>
      <a
        href="https://www.linkedin.com/in/zakwan-bhaiyat/"
        className={classes.sidebar__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn className={classes.sidebar__icon} />
      </a>
      <a
        href="https://twitter.com/zakwan1993"
        className={classes.sidebar__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className={classes.sidebar__icon} />
      </a>
      <a
        href="https://github.com/zakwan93"
        className={classes.sidebar__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className={classes.sidebar__icon} />
      </a>
      <a
        href="https://codepen.io/zakwan93-the-animator/"
        className={classes.sidebar__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Codepen className={classes.sidebar__icon} />
      </a>
      <a
        href="https://www.instagram.com/zakwan.bhaiyat/"
        className={classes.sidebar__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className={classes.sidebar__icon} />
      </a>
    </div>
  );
};
export default SocialIcon;
