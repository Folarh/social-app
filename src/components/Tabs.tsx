import { useState } from "react";
import "./Tabs.css";
import Signup from "./Signup";
import Login from "./Login";

// import Login from "../pages/login/Login";
// import Signup from "../pages/signup/Signup";

export default function Tabs() {
  const [toggle, setToggle] = useState<Number>(1);

  const toggleTab = (index: Number) => {
    setToggle(index);
  };
  return (
    <>
      <div className="hi">
        <div className="reg" onClick={() => toggleTab(1)}>
          REGISTER
        </div>
        <div className="reg" onClick={() => toggleTab(2)}>
          LOGIN
        </div>
      </div>
      <div className="taa">
        <p className={toggle == 1 ? "tabs-active" : "tabs"}></p>
        <p className={toggle == 2 ? "tabs-active" : "tabs"}></p>
      </div>
      <div className="content-tabs">
        <div className={toggle == 1 ? "content-active-content" : "content"}>
          <Signup />
        </div>
        <div className={toggle == 2 ? "content-active-content" : "content"}>
          <Login />
        </div>
      </div>
    </>
  );
}
