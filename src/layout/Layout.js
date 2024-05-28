import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            To Do List
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="py-3">
        <Outlet />
      </Container>
    </div>
  );
};
export default Layout;
