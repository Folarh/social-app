import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

//styles
import "./Login.css";
// import Tabs from "../../components/Tabs";

interface User {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const { error, login } = useLogin();
  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate(-1);
  // };
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  // function to help user submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user.email, user.password);
    console.log(user.email, user.password);
  };
  return (
    <div className="login">
      {/* FORM INPUT  */}

      <form className="log-in" onSubmit={handleSubmit}>
        {/* <button onClick={goBack}>Go back</button> */}
        <h1 className="text-center">Welcome back</h1>

        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="input email "
            required
          />
        </div>

        <div className="mb-6 ">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            placeholder="input password"
            required
          />
        </div>

        <button className="btn">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
