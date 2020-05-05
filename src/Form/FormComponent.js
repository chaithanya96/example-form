
import React from 'react';
import './FormComponent.css';
import { InputComponent } from "../FormElements/InputComponent";
import { RadioComponent } from "../FormElements/RadioComponent";
import { DropdownComponent } from "../FormElements/DropdownComponent";
import { CheckboxComponent } from "../FormElements/CheckboxComponent";
import { connect } from "react-redux";
import * as formElements from "./FormElements.json";
import { withRouter } from "react-router-dom";
// Component for the form container
class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.disableSubmit = this.disableSubmit.bind(this);
    }
    changeInputCheckbox = (event) => {
        const newSelection = event.target.value;
        let newSelectionArray;
        if (this.state[event.target.name]) {
            if (this.state[event.target.name].indexOf(newSelection) > -1) {
                newSelectionArray = this.state[event.target.name].filter(s => s !== newSelection)
            } else {
                newSelectionArray = [...this.state[event.target.name], newSelection];
            }
            this.setState({ [event.target.name]: newSelectionArray })
        } else {
            this.setState({ [event.target.name]: [newSelection] })
        }
    }
    submitFormValues(e) {
        e.preventDefault();
        this.props.submitFormData(this.state)
        this.props.history.push('/submit');
    }
    changeInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    displayFormElements() {
        return formElements.formElements.map((item) => {
            switch (item.field) {
                case "Input":
                    return (
                        <InputComponent
                            type={item.type}
                            name={item.key}
                            key={item.key}
                            value={this.state[item.key] || ""}
                            changeInput={this.changeInput}
                            startString={item.startWith ? item.startWith : ""}
                        />
                    );
                case "RadioButton":
                    return (
                        <RadioComponent
                            value={this.state[item.key] || ""}
                            name={item.key}
                            changeInputRadio={this.changeInput}
                            options={item.options}
                            label={item.label}
                            key={item.key}
                        />);
                case "Dropdown":
                    return (
                        <DropdownComponent
                            name={item.key}
                            value={this.state[item.key] || ""}
                            changeValue={this.changeInput}
                            options={item.options}
                            key={item.key}
                        />
                    );
                case "Checkbox":
                    return (
                        <CheckboxComponent
                            name={item.key}
                            value={this.state[item.key] || ""}
                            changeValue={this.changeInputCheckbox}
                            options={item.options}
                            key={item.key}
                            label={item.label}
                        />
                    );
                default: return null;
            }
        }
        );
    }
    disableSubmit() {
        let flag = false;
        formElements.formElements.forEach((item) => {
            if (typeof this.state[item.key] === 'undefined' || this.state[item.key].length === 0) {
                flag = true;
            }
        });
        return flag;
    }
    render() {
        return (
            <React.Fragment>
                <form className="form-container" onSubmit={(e) => this.submitFormValues(e)}>
                    {this.displayFormElements()}
                    <input type="submit" disabled={this.disableSubmit()} />
                </form>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitFormData: (payload) => {
            const action = {
                type: "SUBMIT_FORM",
                payload,
            };
            dispatch(action);
        },
    }
}
export default withRouter(connect(
    null,
    mapDispatchToProps,
)(FormComponent));