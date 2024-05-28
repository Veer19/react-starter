import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AddTodo = ({ setTodoList }) => {
  const initTodo = {
    name: "",
    status: "Pending",
  };
  // const [newTodoText, setNewTodoText] = useState("");
  const [newTodoItem, setNewTodoITem] = useState(initTodo);
  const handleAddItem = () => {
    setTodoList((prev) => {
      return [{ ...newTodoItem, createdAt: Date.now() }, ...prev];
    });
    setNewTodoITem(initTodo);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter tasks"
          type="text"
          value={newTodoItem.name}
          onKeyDown={(event) => {
            if (event.key == "Enter") handleAddItem();
          }}
          onChange={(event) => {
            setNewTodoITem((prev) => {
              return {
                ...prev,
                name: event.target.value,
              };
            });
          }}
        />
        <Button variant="outline-secondary" onClick={handleAddItem}>
          ADD
        </Button>
      </InputGroup>
    </div>
  );
};
export default AddTodo;

// const arrow = () => {};
// const arrow1 = (props) => {
//   const { prop1, prop2 } = props;
// };
// const arrow2 = ({ prop1, prop2 }) => {
//     [...arr1, newElement]
//     {...object1, newKey: newElement}
// };

// const filtered = list.map(((element) => {
//     return element
// }))

// useEffect(() => {}, [])
