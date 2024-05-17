import { useEffect, useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodoItem, setNewTodoItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);
  const handleAddItem = () => {
    setTodoList([newTodoItem,...todoList])
    setNewTodoItem("")
  };

const filterTodoList = () => {
    const filteredList = todoList.filter((item) =>
      item.toLowerCase().includes(searchItem.toLowerCase())
    );
    return filteredList;
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
      <input
        placeholder="Search tasks"
        type="text"
        value={searchItem}
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      ></input>
      {todoList.length == 0 ? <p>No tasks</p> : filterTodoList.map((todoItem, index) => {
        return <p key={index}>{todoItem}</p>;
      })}
    </div>
  );
};
export default App;
