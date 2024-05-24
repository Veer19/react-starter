import "bootstrap/dist/css/bootstrap.min.css";
import { Link, RouterProvider } from "react-router-dom";
import router from "routes";
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
