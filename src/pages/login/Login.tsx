import { useState } from "react";
import useLogin from "../../hooks/useLogin";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const { error, login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(user.email, user.password);
  };
  return (
    <div className="login">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
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
        {/* FORM FOR EMAIL */}
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

        <button>SignUp</button>
        <p>Forgot Password?</p>

        <p>or</p>

        <p>Create new account</p>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
