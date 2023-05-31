//styles
import "./Signup.css";

// import use signup hook
import useSignup from "../../hooks/useSignup";
// import useLogout from "../../hooks/useLogout";
import { useState } from "react";

interface User {
  email: string;
  password: string;
  cpassword: string;
  firstname: string;
  lastname: string;
}

export default function Signup() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    cpassword: "",
    firstname: "",
    lastname: "",
  });

  // custom sigup hook
  const { error, signup } = useSignup();
  // const { logout } = useLogout();

  // function to help user submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(user.email, user.password);
  };
  return (
    <div className="signup">
      <div className="signup-left">
        <h1>CHATTER</h1>
        <p>
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers
        </p>
        <p></p>
      </div>

      {/* FORM INPUT  */}
      <form className="sign-up" onSubmit={handleSubmit}>
        <h1 className="text-center">Register as Writer/Reader</h1>
        <div className="form-names">
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
          <div className="form-names-last">
            <label htmlFor="username">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastrname"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              placeholder="input username "
              required
            />
          </div>
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

        {/* FORM FOR CONFIRM PASSWORD */}
        <div className="mb-6 ">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="cpassword"
            name="cpassword"
            id="cpassword"
            onChange={(e) => setUser({ ...user, cpassword: e.target.value })}
            value={user.cpassword}
            placeholder="Confirm password"
            required
          />
        </div>

        <button className="btn">Create Account</button>
        <button className="btn1">Signup with Google</button>
        <button className="btn1">Signup with LinKedIn</button>

        {/* <button
          onClick={logout}
        
        >
          Logout
        </button> */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
