import React, {createContext, useReducer} from "react";
import UseTodoState from "../hooks/useTodoState";
import todoReducer from "../reducers/todo.reducer";

export const TodosContext = createContext();
const populateList = [
    {id: 1,task: "Learn Code",completed: false},
    {id: 2,task: "Go to Gym",completed: false},
    {id: 3,task: "💖 Love the Boonpie 💖",completed: true}
]
export default function TodoProvider(props){
    const [todos, dispatch] = useReducer(todoReducer, populateList)

    return (
        <TodosContext.Provider value={{todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}


