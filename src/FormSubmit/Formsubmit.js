import { connect } from "react-redux";
import React from 'react';
import "./FormSubmit.css"
function formSubmit(props) {
    if (Object.keys(props.formData).length === 0) {
        return null;
    }
    let keyList = Object.keys(props.formData);
    return (
        <div className="submit-container">
            <div className="success">Submitted!</div>
            {keyList.map((key, index) =>
                <div key={index}>{key} : {JSON.stringify(props.formData[key])}</div>
            )}
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