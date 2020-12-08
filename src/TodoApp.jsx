import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoProvider from "./Contexts/TodosContext";

export default function TodoApp() {
  const url = `url("https://www.transparenttextures.com/patterns/black-linen.png")`
 
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        clear: "both",
        backgroundColor: "#b0aacc",
        backgroundImage: url,
        backgroundSize: "100vh",
        boxSizing:"border-box",
        overflow: "hidden",
        overflowY: "scroll"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODO LIST V2</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
        <TodoProvider>
        <TodoForm />
          <TodoList />
        </TodoProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}
