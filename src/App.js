import { useEffect, useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log(name);
  }, [name]);
  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Email"
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default App;
