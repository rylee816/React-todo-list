import {useState} from "react";

export default function UseInputState (initialVal) {
    const [val, setVal] = useState(initialVal);

    const handleChange = e => {
        setVal(e.target.value);
    };

    const reset = (e) => {
        setVal("")
    };
    return [val, handleChange, reset]
}