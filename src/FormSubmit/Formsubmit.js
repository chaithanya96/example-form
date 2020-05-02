import { connect } from "react-redux";
import React from 'react';
import "./FormSubmit.css"
function formSubmit(props) {
    if (Object.keys(props.formData).length === 0) {
        return null;
    }
    return (
        <div className="submit-container">
            <div className="success">Submitted!</div>
            <div>String Input: {props.formData.inputString}</div>
            <div>Number Input : {props.formData.inputNumber}</div>
            <div>Dropdown Input : {props.formData.inputDropdown}</div>
            <div>Radio Input : {props.formData.inputRadio}</div>
            <div>Checkbox Input : {props.formData.inputCheckbox.map((item, index) =>
                <span key={index}>{item} </span>)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        formData: state.formData,
    }
}

export default connect(
    mapStateToProps,
    null,
)(formSubmit);