import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completed from "./Components/Projects/Completed";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import InProgress from "./Components/Projects/InProgress";
import "./App.css";

function App() {

  const [navigation, setNavigation] = useState([
    { name: "Welcome", href: "/", current: true },
    { name: "In Progress Projects", href: "/inprogress", current: false },
    { name: "Completed Projects", href: "/completed", current: false },
  ])

  return (
    <div>
      <BrowserRouter>
        <Navbar navigation={navigation} setNavigation={setNavigation}/>
        <Routes>
          <Route path="/completed" element={<Completed />} />
          <Route path="/inprogress" element={<InProgress/>}/>
          <Route path="*" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
