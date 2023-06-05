import { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./Login.css";

interface User {
  email: string;
  password: string;
}

function Login(): JSX.Element {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  // function to help user submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <div className="login-left">
        <h1>CHATTER</h1>
        <p>
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
        <p></p>
      </div>

      {/* FORM INPUT  */}

      <form className="log-in" onSubmit={handleSubmit}>
        <button onClick={goBack}>Go back</button>
        <h1 className="text-center">Welcome back</h1>

        {/* FORM FOR EMAIL */}
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

        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
