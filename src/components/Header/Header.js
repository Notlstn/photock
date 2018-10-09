import React from "react";
import classes from "./Header.module.scss";

const Header = () => (
    <div className={classes.Header}>
        <a href="/" className={classes.Header_promo}>
            Photock
        </a>
    </div>
);

export default Header;
