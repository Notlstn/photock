import React from "react";
const Button = props => (
    <button className={props.className} onClick={props.clicked} disabled={props.isDisabled}>
        {props.children}
    </button>
);

export default Button;
