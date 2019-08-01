import React from "react";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Pdf from "../../../assets/Zakwan_FullStack.pdf";
import Link from "../../Link/Link.jsx";
// import "./Toolbar.scss";

import classes from "./Toolbar.scss";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <div className={classes.Toolbar}>
    <Logo />
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
    <div className={classes.DesktopOnly}>
      <Link name="Resume" link={Pdf} />
    </div>
  </div>
);

export default toolbar;
