import { useParams } from "react-router";
const TodoDetails = () => {
  const { todoId } = useParams();
  return <div>TodoDetails - {todoId}</div>;
};
export default TodoDetails;
