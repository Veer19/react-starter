import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = () => {};
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
export default Login;
