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
  const handleSearchItem = () => {
    setSearchItem(event.target.value)
  }

// const filterTodoList = () => {
//     const filteredList = todoList.filter((item) =>
//       item.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     return filteredList;
//   };
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

      <input
        placeholder="Search tasks"
        type="text"
        value={searchItem}
        onKeyDown={(event) => {
          if(event.key == "Enter")
          handleSearchItem()
        }}
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      ></input>
      {todoList.includes(searchItem) ? <p>Enter</p> : todoList.map((todoItem, index) => {
        return <p key={index}>{searchItem}</p>;
      })}
    </div>
  );
};
export default App;
