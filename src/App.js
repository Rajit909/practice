import './App.css';
import TextForm from './TextForm';
import Navbar from './Navbar';
import About from './About';
import {React, useState } from 'react';
import Alert from './Alert.js';
import {
  Routes,
  Route,
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1200);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      setInterval(() => {
        document.title="Install TextUtils now"
      }, 1500);
      setInterval(() => {
        document.title = 'TextUtils- Dark Mode'
      }, 3000);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
  
    <Navbar title="TextUtils" linkOne="Home" linkTwo="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/"
          element={
          <TextForm showAlert={showAlert} mode={mode}/>
          } 
        />
    </Routes>
    </div>
    </>
  );
}

export default App;