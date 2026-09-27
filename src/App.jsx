import { Route,Routes } from "react-router-dom";

import Home from "./pages/Home";
import Robots from "./pages/Robots";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/robots" element={<Robots />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;