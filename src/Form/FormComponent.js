
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
        this.state = {
            inputString: "",
            inputNumber: "",
            inputRadio: "Yes",
            inputDropdown: "",
            inputCheckbox: [],
        };
        this.changeInputString = this.changeInputString.bind(this);
        this.changeInputNumber = this.changeInputNumber.bind(this);
        this.changeInputRadio = this.changeInputRadio.bind(this);
        this.changeInputDropdown = this.changeInputDropdown.bind(this);
        this.changeInputCheckbox = this.changeInputCheckbox.bind(this);
        this.disableSubmit = this.disableSubmit.bind(this);
    }
    changeInputString(event) {
        this.setState({ inputString: event.target.value })
    }
    changeInputNumber(event) {
        this.setState({ inputNumber: event.target.value })
    }
    changeInputRadio(event) {
        this.setState({ inputRadio: event.target.value })
    }
    changeInputDropdown(event) {
        this.setState({ inputDropdown: event.target.value })
    }
    changeInputCheckbox(event) {
        const newSelection = event.target.value;
        let newSelectionArray;
        if (this.state.inputCheckbox.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.inputCheckbox.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.inputCheckbox, newSelection];
        }
        this.setState({ inputCheckbox: newSelectionArray })
    }
    submitFormValues(e) {
        e.preventDefault();
        const formValues = {
            inputString: this.state.inputString,
            inputNumber: this.state.inputNumber,
            inputRadio: this.state.inputRadio,
            inputDropdown: this.state.inputDropdown,
            inputCheckbox: this.state.inputCheckbox,
        };
        this.props.submitFormData(formValues)
        this.props.history.push('/submit');
    }
    displayFormElements() {
        return formElements.formElements.map((item) => {
            switch (item.field) {
                case "InputString":
                    return (
                        <InputComponent
                            type={item.type}
                            key={item.type}
                            value={this.state.inputString}
                            changeInput={this.changeInputString}
                        />
                    );
                case "InputNumber":
                    return (
                        <InputComponent
                            type={item.type}
                            key={item.type}
                            value={this.state.inputNumber}
                            changeInput={this.changeInputNumber}
                        />);
                case "RadioButton":
                    return (
                        <RadioComponent
                            value={this.state.inputRadio}
                            changeInputRadio={this.changeInputRadio}
                            options={item.options}
                            key={item.field}
                        />);
                case "Dropdown":
                    return (
                        <DropdownComponent
                            value={this.state.inputDropdown}
                            changeValue={this.changeInputDropdown}
                            options={item.options}
                            key={item.field}
                        />
                    );
                case "Checkbox":
                    return (
                        <CheckboxComponent
                            value={this.state.inputCheckbox}
                            changeValue={this.changeInputCheckbox}
                            options={item.options}
                            key={item.field}
                        />
                    );
                default: return null;
            }
        }
        );
    }
    disableSubmit() {
        if (!this.state.inputString || !this.state.inputNumber || !this.state.inputRadio ||
            !this.state.inputDropdown || this.state.inputCheckbox.length === 0) {
            return true;
        }
        return false;
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