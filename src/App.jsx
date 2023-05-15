import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completed from "./Components/Projects/Completed";
import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import InProgress from "./Components/Projects/InProgress";
import "./App.css";
import Pictures from "./Components/Pictures/Pictures";

function App() {

  useEffect(()=>{
      console.log(`  
        ____________
       /            \\
       \\  Please    /
        \\ Hire Me! /    
         \\___  ___/  
             \\/      
       /\\_____/\\
      /  o   o  \\
     ( ==  ^  == )
      )         (
     (           )
    ( (  )   (  ) )
   (__(__)___(__)__)`)
  })

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
          <Route path="/pictures" element={<Pictures/>}/>
          <Route path="*" element={<Welcome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
