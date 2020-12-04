import {useState} from "react";

export default function UseInputState (initialVal) {
    const [val, setVal] = useState(initialVal);

    const handleChange = e => {
        setVal(e.target.value);
    };

    const reset = (e) => {
        // e.preventDefault()
        setVal("")
    };
    return [val, handleChange, reset]
}