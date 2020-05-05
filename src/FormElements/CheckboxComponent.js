import React from 'react';
export function CheckboxComponent(props) {
    return (
        <div className="element-container">
            <div>{props.label}</div>
            {props.options.map((item, index) => {
                return (
                    <React.Fragment key={"check" + index}>
                        <input
                            type="checkbox"
                            id={props.name + index}
                            name={props.name}
                            value={item}
                            checked={props.value.indexOf(item) > -1}
                            onChange={props.changeValue}
                        />
                        <label htmlFor={props.name + index}> {item} </label>
                    </React.Fragment>
                );
            })}
        </div>
    );
}