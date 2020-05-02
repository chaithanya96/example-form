import React from 'react';
export function CheckboxComponent(props) {
    return (
        <div className="element-container">
            <div>Select one or more options:</div>
            {props.options.map((item, index) => {
                return (
                    <React.Fragment key={"check" + index}>
                        <input
                            type="checkbox"
                            id={"check" + index}
                            value={item}
                            checked={props.value.indexOf(item) > -1}
                            onChange={props.changeValue}
                        />
                        <label htmlFor={"check" + index}> {item} </label>
                    </React.Fragment>
                );
            })}
        </div>
    );
}