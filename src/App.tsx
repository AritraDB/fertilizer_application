import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/containers/Dashboard/Dashboard";
import ProjectInformation from "./components/containers/ProductInformation/ProductInformation";
import SignInSide from "./components/containers/SignInSide/SignInSide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignInSide />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projectDetails" element={<ProjectInformation />} />
      </Routes>
    </div>
  );
}

export default App;
