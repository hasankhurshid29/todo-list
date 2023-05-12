import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { add } from "../slices/TodoSlice";

const AddNewTodo = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddToDo = () => {
    if (note) {
      dispatch(add(note));
      setNote("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <TextField
        inputProps={{
          style: { padding: "8px" },
        }}
        variant="outlined"
        onChange={handleChange}
        value={note}
        label="Add new todo"
        id="todo-input"
      />
      <Button disableElevation variant="contained" onClick={handleAddToDo}>
        Add
      </Button>
    </div>
  );
};

export default AddNewTodo;
