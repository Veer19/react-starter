import { useEffect, useState } from "react";
import Header from "components/Header";
const App = () => {
  const [name, setName] = useState("Veer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log(email, password);
  };
  const handleUpdateEmail = (email) => {
    if (email != "") {
      setEmail(email);
    }
  };
  return (
    <div>
      <Header userName={email} setUsername={handleUpdateEmail} />
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
