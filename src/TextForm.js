import React, { useState } from 'react'


function TextForm(props) {
  
  const handleUpClick = ()=>{
    let newText = text.toLocaleUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success")
  }
  
  const handleDownClick = ()=>{
    let newText = text.toLocaleLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase", "success")
  }

  const handleClearClick = ()=>{
    setText("")
    props.showAlert("Text cleared", "success")
  }
  

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleCopy = () => {
    console.log("Copied text")
    var text = document.querySelector("#myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard", "success")
  }

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space Removed", "success")
  }

  const [ text, setText] = useState("")

  return (
    <>
    <div className='container'>
    <h1 className='text-center m-4' style={{color:props.mode === 'dark'? '#fff':'black'}}>Text Converter</h1>
    <div className='container col-8'>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'gray':'white', color:props.mode === 'dark'? '#fff':'black'}} 
    id="myBox" rows="8"></textarea>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleUpClick}>Converter to uppercase</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleDownClick}>Converter to lowercase</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mt-4 mx-2' onClick={handleExtraSpace}>Remove space</button>
    </div>
    </div>
    <div className="container my-5">
      <h2>
        Your text summary
      </h2>
      <p>
        {text.split(" ").filter((e)=>{return e.length !== 0}).length} Words and {text.length} Characters
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