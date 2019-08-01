import React from "react";
import classes from "./Header.scss";
import Link from "../Link/Link";

const Header = () => {
  return (
    <section className={classes.Header}>
      <div>
        <h1 className={classes.Header__hi}>Hi, my name is</h1>
        <h2 className={classes.Header__title}> Zakwan Bhaiyat.</h2>
        <h3 className={classes.Header__subtitle}>
          I build things for the web.
        </h3>
        <div className={classes.Blurb}>
          <p>
            I'm a Full Stack Developer based in <span>New York, NY.</span> I
            focused on developing and designing products for the web, from
            simple landing pages to full-fledged web application.
          </p>
        </div>
        <Link name="Get in touch" link="mailto:zakwan.bhaiyat23@gmail.com" />
      </div>
    </section>
  );
};

export default Header;
