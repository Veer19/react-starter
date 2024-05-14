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
  const [names, setNames] = useState(["veer", "shriyank", "kundan"]);
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
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
      {names.length == 0 ? <p>List Empty</p> : <p>List has elements</p>}
    </div>
  );
};
export default App;
