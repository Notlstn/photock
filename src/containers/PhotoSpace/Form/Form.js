import React from "react";
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import classes from "./Form.module.scss";

class InputForm extends React.Component {
    state = {
        form: {
            quantity: {
                elementType: "input",

                elementConfig: {
                    type: "number",
                    className: classes.Input,
                    min: 1,
                    max: 10
                },
                value: 0,
                label: "Ilość zdjęć:",
                validation: {
                    required: true,
                    maxNumberValue: 10,
                    minNumberValue: 1
                },
                valid: true
            },
            species: {
                elementType: "select",

                elementConfig: {
                    parent: {
                        className: classes.Select
                    },
                    options: [
                        { value: "", displayValue: "Wybierz rodzaj" },
                        { value: "shibes", displayValue: "Psy" },
                        { value: "cats", displayValue: "Koty" },
                        { value: "birds", displayValue: "Ptaki" },
                        { value: "random", displayValue: "Losowe" }
                    ]
                },
                value: "",
                label: "Typ zwierzaka:",
                validation: {}
            }
        }
    };

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "";
        }

        if (rules.maxNumberValue || rules.maxNumberValue === 0) {
            isValid = value <= rules.maxNumberValue && isValid;
        }

        if (rules.minNumberValue || rules.minNumberValue === 0) {
            isValid = value >= rules.minNumberValue && isValid;
        }

        return isValid;
    }

    handleInputChange = (event, inputID) => {
        const updatedForm = {
            ...this.state.form
        };

        const updatedFormElement = {
            ...updatedForm[inputID]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);

        updatedForm[inputID] = updatedFormElement;

        this.setState({ form: updatedForm });
    };

    _handleClearClick = () => {
        this.props.handleClearClick();
        const updatedForm = {
            ...this.state.form
        };

        let updatedFormElement = updatedForm["quantity"];
        updatedFormElement.value = 0;
        updatedForm["quantity"] = updatedFormElement;

        updatedFormElement = updatedForm["species"];
        updatedFormElement.value = "";
        updatedForm["species"] = updatedFormElement;

        this.setState({
            form: updatedForm
        });
    };

    _prepareFormElements = () => {
        let formElements = [];

        for (let key in this.state.form) {
            formElements.push({
                id: key,
                config: this.state.form[key]
            });
        }
        return formElements;
    };

    _prepareButtonComponent = () => {
        let buttonComponent = (
            <Button
                className={classes.FormButton}
                clicked={() =>
                    this.props.handleSearchClick(this.state.form.quantity.value, this.state.form.species.value)
                }
            >
                Wyszukaj
            </Button>
        );

        if (this.props.isSelected) {
            buttonComponent = (
                <Button className={classes.FormButton} isDisabled>
                    Ładuję...
                </Button>
            );
        }

        if (this.props.isSelected && this.props.imagesLength > 0) {
            buttonComponent = (
                <Button className={classes.FormButton} clicked={this._handleClearClick}>
                    Wyczyść
                </Button>
            );
        }

        return buttonComponent;
    };

    render() {
        const formElements = this._prepareFormElements();
        const buttonComponent = this._prepareButtonComponent();

        return (
            <div className={classes.Form}>
                <div className="grid">
                    <div className="column">
                        <Input
                            key={formElements[0].id}
                            elementType={formElements[0].config.elementType}
                            elementConfig={formElements[0].config.elementConfig}
                            value={formElements[0].config.value}
                            label={formElements[0].config.label}
                            className={classes.FormElement}
                            changed={event => this.handleInputChange(event, formElements[0].id)}
                        />
                    </div>
                    <div className="column">
                        <Input
                            key={formElements[1].id}
                            elementType={formElements[1].config.elementType}
                            elementConfig={formElements[1].config.elementConfig}
                            value={formElements[1].config.value}
                            label={formElements[1].config.label}
                            className={classes.FormElement}
                            changed={event => this.handleInputChange(event, formElements[1].id)}
                        />
                    </div>
                </div>
                <div className="grid">
                    <div className="column">{buttonComponent}</div>
                </div>
            </div>
        );
    }
}

export default InputForm;
