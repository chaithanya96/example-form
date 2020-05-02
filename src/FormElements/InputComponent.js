import React from 'react';

export function InputComponent(props) {
    return (
        <div>
            <input
                className="form-input col-12"
                placeholder={"Enter a " + props.type}
                type={props.type}
                value={props.value}
                onKeyPress={e => handleKeyPress(e)}
                onChange={e => props.changeInput(e)}
            />
        </div>
    );
}
const handleKeyPress = e => {
    if (e.which < 48 ||
        (e.which > 57 && e.which < 65) ||
        (e.which > 90 && e.which < 97) ||
        e.which > 122) {
        e.preventDefault();
    }
}