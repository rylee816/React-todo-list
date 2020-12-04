import {useState} from "react";
import EditForm from "./EditForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

 function TodoItem(props) {
    const [isEditing, toggle] = useState(false);

    function UseToggle(){
        toggle(!isEditing)
    }

  return (
    <ListItem style={{height:"64px"}}>
    {isEditing ? <EditForm task={props.task} id={props.id} toggle={UseToggle} editTodo={props.editTodo}/> :
    <>
      <ListItemText style={{textDecoration: props.completed ? "line-through": "none"}}>
        <Checkbox tabIndex={-1} checked={props.completed} onClick={()=>props.toggleTodo(props.id)}/>
        {props.task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit" onClick={UseToggle}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete"  style={{color:"orangered"}} onClick={()=> props.deleteTodo(props.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
      </>
      }
    </ListItem>
  );
}
export default TodoItem;