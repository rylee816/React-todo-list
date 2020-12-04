import {useState, useEffect} from "react";

export default function useLocalStorageState(key, initialVal){
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key) || String(initialVal));
        } catch(e) {
            val = initialVal;
        }
        return val;
    })
    useEffect(() => {
        window.localStorage.setItem(key , JSON.stringify(state))
    }, [state])
    return [state, setState]
}