import { useEffect, useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodoItem, setNewTodoItem] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);
  const handleAddItem = () => {
    setTodoList([newTodoItem,...todoList])
    setNewTodoItem("")
  };
  const [names, setNames] = useState(["veer", "shriyank", "kundan"]);
  return (
    <div>
      <h1>To Do List</h1>
      <input
        placeholder="Enter tasks"
        type="text"
        value={newTodoItem}
        onKeyDown={(event) => {
          if(event.key == "Enter")
          handleAddItem()
        }}
        onChange={(event) => {
          setNewTodoItem(event.target.value);
        }}
      ></input>
      <button onClick={handleAddItem}>ADD</button>
      {todoList.length == 0 ? <p>No tasks</p> : todoList.map((todoItem, index) => {
        return <p key={index}>{todoItem}</p>;
      })}
    </div>
  );
};
export default App;
