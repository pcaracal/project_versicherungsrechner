import { React, useState, useEffect } from "react";

const InputElement = (props) => { //Props: func: setVal() | str/int: val | str: placeholder | bool: onlyNumbers
    const [val, setVal] = useState("");
    const placeholder = props.placeholder;
    const numPattern = "[0-9]*";

    useEffect(() => {
        if (props.onlyNumbers) props.setVal(Number(val))
        else props.setVal(val);

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
                aria-invalid={props.isInvalid}
            />
        </div>
    );
}

export default InputElement;