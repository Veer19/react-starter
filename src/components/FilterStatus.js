import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const FilterStatus = ({ searchStatus, setSearchStatus }) => {
  return (
    <div>
      <Form.Select
        onChange={(event) => setSearchStatus(event.target.value)}
        aria-label="Default select example"
      >
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </Form.Select>
    </div>
  );
};
export default FilterStatus;
