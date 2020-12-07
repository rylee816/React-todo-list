import {v4 as uuidv4} from "uuid";

const reducer = (state, action) => {
    switch(action.type){
        case "add": 
          return [...state, {id:uuidv4(), task: action.task, completed: false}]
        case "delete":
          return state.filter((item) => {
            return item.id !== action.id;
        }) 
        case "toggle": 
        return state.map((todo) => {
            return todo.id === action.id ? {...todo, completed: !todo.completed} : todo;
          })
        case "edit":
            return state.map((todo)=>{
                return todo.id === action.id ? {...todo, task: action.text} : todo;
            })
         default:
             return state;     
    }
}

    export default reducer;


// addTodo: (newTask) => {
//     setTodos(prev => {
//         return [...prev, {id:uuidv4(), task: newTask, completed: false}]
//     })
// },
// deleteTodo:(id) => {
//     setTodos((prev) => {
//         return prev.filter((item) => {
//             return item.id !== id;
//         })
//     })
//  },
//  toggleTodo: (id) => {
//     const updatedTodos = todos.map((todo) => {
//         return  todo.id === id ? {...todo, completed: !todo.completed} : todo;
//       })
//       setTodos(updatedTodos)
//   },
//  editTodo: (id, text) => {
//     const editedTodos = todos.map((todo)=>{
//         return todo.id === id ? {...todo, task: text} : todo;
//     })
//     setTodos(editedTodos)
// }

// }
