import React from 'react';

export function DropdownComponent(props) {
    return (
        <div>
            <select
                className="form-input"
                value={props.value}
                onChange={props.changeValue}>
                <option value="" disabled>Select option</option>
                {props.options.map((item, index) =>
                    <option value={item} key={index}>{item}</option>)}
            </select>
        </div>
    );
}