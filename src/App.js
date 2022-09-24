import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Teams from "./pages/teams";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
