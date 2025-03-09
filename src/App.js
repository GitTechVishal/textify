import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App(props) {
  //? useState Hook We are handling dark mode complet website
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (mesage, type) => {
    setAlert({
      msg: mesage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  };
  //Passing class as cls here, we can use any name

  const toggleMode = (cls) => {
    // console.log(mode);
    // console.log(cls);

    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setmode("dark");
      // console.log(mode);
      // console.log(cls);
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = cls === "dark" ? "white" : "black";
      showAlert(cls + " Mode is enabled", "success");
      document.title = "Textify - Dark Mode";
    } else {
      setmode("light");

      // console.log(mode);
      // console.log(cls);

      document.body.style.backgroundColor = "white";
      document.body.style.color = cls === "dark" ? "white" : "black";

      showAlert(cls + " Mode is enabled", "success");
      //? to show title
      document.title = "Textify - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
    </>
  );
}
export default App;
