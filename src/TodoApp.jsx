import React from 'react';
import TodoForm from "./TodoForm";
import TodoList from './TodoList';
import useTodoState from "./hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";


export default function TodoApp(){
    const populateList = [
        {id: 1,task: "Learn Code",completed: false},
        {id: 2,task: "Go to Gym",completed: false},
        {id: 3,task: "Love the Boonpie 💖",completed: true},
    ];
    const initialTodos = JSON.parse(window.localStorage.getItem("todos"|| []))

    const {todos, addTodo, deleteTodo, toggleTodo, editTodo} = useTodoState(populateList)

    

 
  


    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
        <AppBar color="primary" position="static" style={{height:"64px"}}>
            <Toolbar>
                <Typography color="inherit" >TODOS WITH HOOKS</Typography>
            </Toolbar>
        </AppBar>
          <Grid container justify="center" style={{marginTop: "1rem"}}>
            <Grid item xs={11} md={8} lg={4}>
          <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
            </Grid>
          </Grid>
        </Paper>
    )
}