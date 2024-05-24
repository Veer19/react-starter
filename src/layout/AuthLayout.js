import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <header>Auth Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
export default AuthLayout;
