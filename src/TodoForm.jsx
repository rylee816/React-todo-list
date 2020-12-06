import React, {useContext} from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {TodosContext} from "./Contexts/TodosContext";

export default function TodoForm(props) {
  const [task, updateTask, resetTask] = useInputState("");
  const {addTodo} = useContext(TodosContext);

  return (
    <Paper style={{ margin: "1rem 0", padding: "1rem 0" }}>
      <form
        onSubmit={(e)=> {
          e.preventDefault()
          addTodo(task)
          resetTask('')
        }}
      >
        <TextField
          onChange={updateTask}
          type="text"
          value={task}
          placeholder="New Task"
          margin="normal"
          fullWidth
        />
      </form>
    </Paper>
  );
}
