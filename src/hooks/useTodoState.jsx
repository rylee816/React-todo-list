import useLocalStorageState from "./useLocalStorageState"
import {v4 as uuidv4} from "uuid";


function UseTodoState(initialTodos, populateList){
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    return {
        todos,
        addTodo: (newTask) => {
            setTodos(prev => {
                return [...prev, {id:uuidv4(), task: newTask, completed: false}]
            })
        },
        deleteTodo:(id) => {
            setTodos((prev) => {
                return prev.filter((item) => {
                    return item.id !== id;
                })
            })
         },
         toggleTodo: (id) => {
            const updatedTodos = todos.map((todo) => {
                return  todo.id === id ? {...todo, completed: !todo.completed} : todo;
              })
              setTodos(updatedTodos)
          },
         editTodo: (id, text) => {
            const editedTodos = todos.map((todo)=>{
                return todo.id === id ? {...todo, task: text} : todo;
            })
            setTodos(editedTodos)
        }
    
    }
}

export default UseTodoState;