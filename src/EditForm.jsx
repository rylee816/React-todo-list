import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function EditForm(props) {
  const [task, editTask] = useInputState(props.task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editTodo(props.id, task);
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
