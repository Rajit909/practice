import React, { useState } from 'react'


function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText)
  }
  const handleDownClick = ()=>{
    let newText = text.toLocaleLowerCase()
    setText(newText)
  }
  const handleClearClick = ()=>{
    setText("")
  }
  

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [ text, setText] = useState("Enter text here")

  return (
    <>
    
    <div className='container'>
    <h1 className='text-center m-4' style={{color:props.mode === 'dark'? '#fff':'black'}}>Text Converter</h1>
    <div className='container col-8'>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'gray':'white', color:props.mode === 'dark'? '#fff':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleUpClick}>Converter to uppercase</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleDownClick}>Converter to lowercase</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleClearClick}>Clear Text</button>
    </div>
    </div>
    <div className="container my-5">
      <h2>
        Your text summary
      </h2>
      <p>
        {text.split("").length} Words and {text.length} Characters
      </p>
      <p>
        {0.008 * text.split("").length} Minutes read
      </p>
      <h2>Preview</h2>
      <p>
        {text}
      </p>
    </div>

    </>
  )
}

export default TextForm