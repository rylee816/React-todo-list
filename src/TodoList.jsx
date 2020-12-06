import { Paper } from "@material-ui/core";
import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import {TodosContext} from "./Contexts/TodosContext";


export default function TodoList(props) {
const {todos} = useContext(TodosContext)

  return (
    <Paper>
      <List>
      <h1 style={{color:"slategrey"}}>Todo List</h1>

        {todos.map((todo, i) => {
          return (
            <React.Fragment key={todo.id}>
                  <TodoItem
                  {...todo}
                    completed={todo.completed}
                    deleteTodo={props.deleteTodo}
                    toggleTodo={props.toggleTodo}
                    editTodo={props.editTodo}
                  />
             
              {i < todos.length -1 && <Divider/ >}
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
    )
}
