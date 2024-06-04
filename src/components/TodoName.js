import { Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const TodoName = ({ name, todoIndex, updateTodoName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      {isEditing ? (
        <>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
            <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <Button
            variant="contained"
            onClick={() => {
              updateTodoName(todoIndex, newName);
              setIsEditing(false);
            }}
          >
            Save
          </Button>
          <Button variant="contained" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Typography variant="body1">{name}</Typography>
          <Button
            variant="contained"
            onClick={() => {
              setNewName(name);
              setIsEditing(true);
            }}
          >
            Edit
          </Button>
        </>
      )}
    </Stack>
  );
};

export default TodoName;
