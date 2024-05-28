import { Typography, Stack, Button } from "@mui/material";
import { useState } from "react";
import { Form } from "react-bootstrap";

const TodoStatus = ({ status, todoIndex, updateTodoStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newStatus, setNewStatus] = useState(status);
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      {isEditing ? (
        <>
          <Form.Select
            aria-label="Default select example"
            value={newStatus}
            onChange={(event) => setNewStatus(event.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </Form.Select>
          <Button
            variant="contained"
            onClick={() => {
              updateTodoStatus(todoIndex, newStatus);
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
          <Typography variant="body1">{status}</Typography>
          <Button
            variant="contained"
            onClick={() => {
              setNewStatus(status);
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

export default TodoStatus;
