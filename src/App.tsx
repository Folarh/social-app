import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import useAuthContext from "./hooks/useAuthContext";
//styles
import "./App.css";
//components
import LandingPage from "./pages/landing-page/LandingPage";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashbord/Dashboard";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Dashboard />} />
        </Routes> */}
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to={"/dashboard"} />}
          />

          <Route
            path="/login"
            element={!user ? <Signup /> : <Navigate to={"/dashboard"} />}
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
