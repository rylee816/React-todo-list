import React, {useContext} from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import {TodosContext} from "./Contexts/TodosContext";

function EditForm(props) {

  const {editTodo} = useContext(TodosContext);
  const [task, editTask] = useInputState(props.task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(props.id, task);
        props.toggle();
      }}
      style={{marginLeft:"1rem", width:"50%"}}
    >
      <TextField
        style={{ width: "100%" }}
        margin="normal"
        value={task}
        onChange={editTask}
        autoFocus
      />
    </form>
  );
}

export default EditForm;
