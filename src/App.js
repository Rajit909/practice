import './App.css';
import TextForm from './TextForm';
import Navbar from './Navbar';
// import About from './About';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if (mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'light'
    }
  }

  return (
    <>
    
    <Navbar title="Home" linkOne="About" linkTwo="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm/>
    {/* <About/> */}
    </>
  );
}

export default App;
