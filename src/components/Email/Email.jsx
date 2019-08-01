import React from "react";

import classes from "./Email.scss";

const Email = () => {
  return (
    <div className={classes.Email}>
      <a
        href="mailto:zakwan.bhaiyat23@gmail.com"
        className={classes.Email__link}
      >
        zakwan.bhaiyat23@gmail.com
      </a>
    </div>
  );
};

export default Email;
