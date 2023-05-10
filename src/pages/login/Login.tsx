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
    <div className=" flex-column justify-center items-center border border-blue-300">
      <h1 className="text-center">Login page</h1>
      <form className="border border-red-600 p-10 " onClick={handleSubmit}>
        <div className="mb-6 mt-6">
          <label
            htmlFor="email"
            className="mb-2 text-sm  font-medium text-gray-900 "
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="input email "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5 w-full focus:outline-none focus:border-blue-600"
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
            placeholder="input password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5  w-full focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 text-center">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
