import React from "react";
// import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import Pdf from "../../../assets/Zakwan_FullStack.pdf";
import Link from "../../Link/Link.jsx";

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
        <Link name="Resume" link={Pdf} />
      </div>
    </Aux>
  );
};

export default sideDrawer;
