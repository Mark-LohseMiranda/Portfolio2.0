import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import me from "./assets/apngb-animated.png";
import sleep from "./assets/sleep.png";
import ouch from "./assets/ouch.png";
import Speech from "./Components/Speech/Speech";
import Completed from "./Components/Projects/Completed";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Welcome from "./Components/Welcome/Welcome";
import InProgress from "./Components/Projects/InProgress";

function App() {
  const [message, setMessage] = useState("Hello");
  const [mouseMoving, setMouseMoving] = useState(false);

  // const mouseMove = () => {
  //   setMouseMoving(true);
  //   setTimeout(() => setMouseMoving(false), 10000);
  // };

  const getClickCoords = (event) => {
    // from: https://stackoverflow.com/a/29296049/14198287
    var e = event.target;
    var dim = e.getBoundingClientRect();
    var x = event.clientX - dim.left;
    var y = event.clientY - dim.top;
    // return [x, y];
    // console.log(x, y);
    if (x >= 23 && x <= 273 && y >= 97 && y <= 227) {
      setMessage("Ouch!");
      setTimeout(() => {
        setMessage("Hello");
      }, 1000);
    } else if (x >= 61 && x <= 286 && y >= 324 && y <= 476) {
      setMessage("That tickles!");
      setTimeout(() => {
        setMessage("Hello");
      }, 1000);
    }
  };

  // useEffect(() => {
  //   const noMouseMove = () => {
  //     setMouseMoving(false);
  //   };
  //   const handleMouseMove = () => {
  //     setMouseMoving(true);
  //     setTimeout(() => {
  //       setMouseMoving(false);
  //       // return;
  //     }, 5000);
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("mousedown", handleMouseMove);
    // window.addEventListener("touchmove", handleMouseMove);
    // window.addEventListener("scroll", handleMouseMove);
    // return () => {
    //   document.removeEventListener("mousemove", noMouseMove);
    //   // window.removeEventListener("mousedown", noMouseMove);
    //   // window.removeEventListener("touchmove", noMouseMove);
    //   // window.removeEventListener("scroll", noMouseMove);
    // };
  // }, [setMouseMoving]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setMouseMoving(false);
  //   }, 5000);
  // }, [mouseMoving, setMouseMoving]);

  return (
    // <
    //   onTouchMove={() => setMouseMoving(true)}
    //   onScroll={() => setMouseMoving(true)}
    //   onMouseDown={() => setMouseMoving(true)}
    //   onMouseMove={() => setMouseMoving(true)}
    // >
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/completed" element={<Completed />} />
          <Route path="/inprogress" element={<InProgress/>}/>
          <Route path="*" element={<Welcome/>}/>
        </Routes>

        {/* {mouseMoving ? (
          <div id="memoji">
            {message === "Ouch!" ? (
              <img onClick={getClickCoords} src={ouch} alt="sad memoji" />
            ) : (
              <img onClick={getClickCoords} src={me} alt="memoji" />
            )}
            <Speech message={message} />
          </div>
        ) : (
          <div id="memoji">
            <img onClick={getClickCoords} src={sleep} alt="sleeping memoji" />
            
          </div>
        )} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
