import { React, useState, useEffect } from "react";

const InputElement = (props) => { //Props: func: setVal() | str/int: val | str: placeholder | bool: onlyNumbers
    const [val, setVal] = useState("");
    const placeholder = props.placeholder;
    const numPattern = "[0-9]*";

    useEffect(() => {
        props.setVal(val)
    }, [val]);


    return (
        <div className="InputElement">
            <input
                placeholder={placeholder}
                pattern={props.onlyNumbers ? numPattern : "*"}
                onChange={(e) => {
                    setVal(() => (e.target.validity.patternMismatch ? val : e.target.value));

                }}
                value={val}
            />
        </div>
    );
}

export default InputElement;