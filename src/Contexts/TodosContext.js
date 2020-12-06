import React, {createContext} from "react";
import UseTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();
const populateList = [
    {id: 1,task: "Learn Code",completed: false},
    {id: 2,task: "Go to Gym",completed: false},
    {id: 3,task: "Love the Boonpie 💖",completed: true}
]
export default function TodoProvider(props){
    const todoMethods = UseTodoState(populateList)
    console.log(todoMethods);

    return (
        <TodosContext.Provider value={todoMethods}>
            {props.children}
        </TodosContext.Provider>
    )
}


