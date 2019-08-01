import React from "react";
import Logo from "../../Logo/Logo";
// import { Document } from "react-pdf";
import Resume from "../Resume/Resume";
// import "./Toolbar.scss";

import classes from "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
    <Resume />
  </header>
);

export default toolbar;
