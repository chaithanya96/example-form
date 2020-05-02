import React from 'react';
export function RadioComponent(props) {
    return (
        <div className="element-container">
            <div>Select one option: </div>
            {props.options.map((item, index) =>{ 
            return (<React.Fragment key={"radio" + index}>
                <input
                    key={"radio" + index}
                    type="radio"
                    name="radio-group"
                    value={item}
                    id={"radio" + index}
                    checked={props.value === item}
                    onChange={props.changeInputRadio}
                />
                <label key={"o" + index} htmlFor={"radio" + index}> {item} </label>
                </React.Fragment>)
            }
            )}
        </div>
    )
}