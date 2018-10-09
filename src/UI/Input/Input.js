import React from "react";

const Input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case "input":
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case "select":
            inputElement = (
                <select {...props.elementConfig.parent} onChange={props.changed} value={props.value}>
                    {props.elementConfig.options.map(singleOption => (
                        <option key={singleOption.value} value={singleOption.value}>
                            {singleOption.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            break;
    }

    return (
        <div className={props.className}>
            {props.label ? <label> {props.label} </label> : null}
            {inputElement}
        </div>
    );
};

export default Input;
