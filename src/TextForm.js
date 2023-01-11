import React, { useState } from 'react'


function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText)
  }
  

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [ text, setText] = useState("Enter text here")

  return (
    <>
    
    <div className='container'>
    <h1 className='text-center m-4'>Text Converter</h1>
    <div className='container col-8'>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className='btn btn-primary mt-4' onClick={handleUpClick}>Converter to uppercase</button>
    </div>
    </div>

    </>
  )
}

export default TextForm