import React from 'react';

export function InputComponent(props) {
    let inputExpression = props.type === "number" ? "[0-9]*$" : "[A-Za-z ]*$";
    return (
        <div>
            <input
                className="form-input col-12"
                placeholder={"Enter a " + props.type}
                type="text"
                pattern={props.startString + inputExpression}
                name={props.name}
                value={props.value}
                title={"Should start with " + props.startString}
                onChange={e => validateInput(e, inputExpression, props.changeInput)}
            />
        </div>
    );
}

const validateInput = (e, inputExpression, changeInput) => {
    let pattern = new RegExp("^" + inputExpression);
    if (pattern.test(e.target.value)) {
        changeInput(e);
    } else {
        e.preventDefault();
    }
}
