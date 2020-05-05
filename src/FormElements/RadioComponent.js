import React from 'react';
export function RadioComponent(props) {
    return (
        <div className="element-container">
            <div>{props.label} </div>
            {props.options.map((item, index) => {
                return (<React.Fragment key={"radio" + index}>
                    <input
                        key={"radio" + index}
                        type="radio"
                        name={props.name}
                        value={item}
                        id={props.name + index}
                        checked={props.value === item}
                        onChange={props.changeInputRadio}
                    />
                    <label key={"label" + index} htmlFor={props.name + index}> {item} </label>
                </React.Fragment>)
            }
            )}
        </div>
    )
}