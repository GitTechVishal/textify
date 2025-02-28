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

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode is enabled", "success");
      document.title = "Textify - Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is enabled", "success");
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
