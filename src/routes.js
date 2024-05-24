import Dashboard from "views/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "views/Login";
import TodoDetails from "views/TodoDetails";
import Layout from "layout/Layout";
import AuthLayout from "layout/AuthLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
