import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const SearchTodo = ({ searchItem, setSearchItem }) => {
  return (
    <div>
      <Form.Control
        placeholder="Search tasks"
        type="text"
        value={searchItem}
        onChange={(event) => {
          setSearchItem(event.target.value);
        }}
      ></Form.Control>
    </div>
  );
};
export default SearchTodo;
