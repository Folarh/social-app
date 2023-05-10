// import use signup hook
import useSignup from "../../hooks/useSignup";
// import useLogout from "../../hooks/useLogout";
import { useState } from "react";

interface User {
  email: string;
  password: string;
  username: string;
}

export default function Signup() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
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
    <div className=" flex-column justify-center items-center  ">
      <h1 className="text-center">Signup page</h1>

      {/* FORM INPUT  */}
      <form
        className="border w-1/2 mx-auto mt-10 p-10 "
        onSubmit={handleSubmit}
      >
        <div className="mb-6 mt-6  ">
          <label
            htmlFor="username"
            className="mb-2 text-sm  font-medium text-gray-900 "
          >
            Username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="input username "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5 w-full focus:outline-none focus:border-blue-600"
            required
          />
        </div>
        {/* FORM FOR EMAIL */}
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
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="input email "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5 w-full focus:outline-none focus:border-blue-600"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5  w-full focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 text-center">
          SignUp
        </button>

        {/* <button
          onClick={logout}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 text-center"
        >
          Logout
        </button> */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
