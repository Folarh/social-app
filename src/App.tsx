import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";
//styles
import "./App.css";
//components
import LandingPage from "./pages/landing-page/LandingPage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashbord/Dashboard";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to={"/dashboard"} />}
          />
          s
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/dashboard"} />}
          />
          {authIsReady && (
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to={"/login"} />}
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
