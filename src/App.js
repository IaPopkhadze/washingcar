import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact.js";
import Projects from "./components/Projects/Projects.js";
import HomeLayout from "./components/HomeLayout";


function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
