import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import Workspace from "./components/Workspace";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workspace" element={<Workspace/>} />
      </Route>
    </Routes>
  );
}

export default App;
