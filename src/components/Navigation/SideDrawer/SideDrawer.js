import React from "react";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Resume from "../Resume/Resume";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

import classes from "./SideDrawer.scss";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        {/* <Logo /> */}
        <nav>
          <NavigationItems />
        </nav>
        <Resume />
      </div>
    </Aux>
  );
};

export default sideDrawer;
