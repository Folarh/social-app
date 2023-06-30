//styles
import "./Signup.css";

// import use signup hook
import useSignup from "../hooks/useSignup";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
  firstname: string;
}

export default function Signup() {
  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate(-1);
  // };
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    firstname: "",
  });

  // custom sigup hook
  const { error, signup } = useSignup();

  // function to help user submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(user.email, user.password);
    console.log(user.email, user.password);
  };
  return (
    <div className="signup">
      {/* FORM INPUT  */}
      <form className="sign-up" onSubmit={handleSubmit}>
        {/* <button onClick={goBack}>Go back</button> */}
        <h1 className="text-center">Register as Writer/Reader</h1>

        <div className="form-names-first">
          <label htmlFor="username">Firstrname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            placeholder="input username "
            required
          />
        </div>

        {/* FORM FOR EMAIL */}
        <div className="mb-6 mt-6">
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
        {/* FORM FOR PASSWORD */}
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

        <button className="btn">Create Account</button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
