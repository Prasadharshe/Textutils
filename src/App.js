import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import React, { useState } from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   BrowserRouter, RouterProvider,Routes, Route, Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('warning'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
    
  }
  const toggleMode = () => {
    if(mode==='warning'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "Success ")
      document.title = 'TextUtils - Dark Mode';
    //   setInterval (() => {
    //     document.body.style.h1 = 'grey';
    //   }, 500)
    //   setInterval (() => {
    //     document.body.style.h1 = 'yellow';
    // }, 1000)

    }
    else{
      setMode('warning');
      document.body.style.backgroundColor = '#fff5c6';
      showAlert("Light mode has been enabled", "Success ")
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* np */}
    <div className="container my-3">

    {/* <BrowserRouter>
        <Routes>
		      <Route path="/" element={<TestForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />}></Route>	
	      </Routes>
        <Routes>
		      <Route path="/about" element={<About />}></Route>	
	      </Routes>

  </BrowserRouter> */}

      <TestForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />
      {/* <About /> */}
    </div>
    </> 
  );
}

export default App;
