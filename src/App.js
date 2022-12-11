import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./routes/dashboard/dashboard.component";
import SignIn from "./routes/authentications/signin.component";
import SignUp from "./routes/authentications/signup.component";
import "./assets/css/style.css";
import InitialState from "./utils/initial-state/initial-state";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { selectIsLoading } from "./store/user/user.selector";
import { useSelector } from "react-redux";
import Preloader from "./components/preloader/preloader.component";

function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <InitialState />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigate replace to={"/login"} />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
