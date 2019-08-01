import React from "react";
import classes from "./NavigationItems.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ol className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      About
    </NavigationItem>
    <NavigationItem link="/"> Experiance </NavigationItem>
    <NavigationItem link="/"> Work </NavigationItem>
    <NavigationItem link="/"> Contact </NavigationItem>
  </ol>
);

export default navigationItems;
