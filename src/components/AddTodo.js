import { useState } from "react";

const AddTodo = ({ setTodoList }) => {
  const [newTodoItem, setNewTodoItem] = useState("");
  const handleAddItem = () => {
    setTodoList((prev) => {
      return [newTodoItem, ...prev];
    });
    setNewTodoItem("");
  };
  return (
    <div>
      <input
        placeholder="Enter tasks"
        type="text"
        value={newTodoItem}
        onKeyDown={(event) => {
          if (event.key == "Enter") handleAddItem();
        }}
        onChange={(event) => {
          setNewTodoItem(event.target.value);
        }}
      ></input>
      <button onClick={handleAddItem}>ADD</button>
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
