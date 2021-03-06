import React, {createContext} from "react";
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

const populateList = [
    {id: 1,task: "Learn Code", completed: false},
    {id: 2,task: "Go to Gym", completed: false},
]
export default function TodoProvider(props){
    const [todos, dispatch] = useLocalStorageReducer("todos", populateList, todoReducer)


    return (
        <TodosContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
        {props.children}
        </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}


