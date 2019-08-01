import React from "react";
import Logo from "../../Logo/Logo";
// import { Document } from "react-pdf";
import Resume from "../Resume/Resume";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
// import "./Toolbar.scss";

import classes from "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Logo />
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <div className={classes.DesktopOnly}>
      <Resume />
    </div>
  </header>
);

export default toolbar;
