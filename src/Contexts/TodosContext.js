import React, {createContext, useReducer} from "react";
import todoReducer from "../reducers/todo.reducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const populateList = [
    {id: 1,task: "Learn Code", completed: false},
    {id: 2,task: "Go to Gym", completed: false},
    {id: 3,task: "💖 Love the Boonpie 💖",completed: true}
]
export default function TodoProvider(props){
    const [todos, dispatch] = useReducer(todoReducer, populateList)


    return (
        <TodosContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
        {props.children}
        </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}


