import { useEffect, useState } from "react";
import ComponentNew from "./ComponentNew";
import "./App.css";

function App() {
  const [text,setText] = useState("Hi");
  const [inputValue,setInputValue] = useState("");
  const [show,setShow] = useState(true);

  useEffect(()=>{
    console.log("effect");
  },[])

  const buttonClickHandler = ()=>{
    if(inputValue){
      setText(inputValue);
    }
    setInputValue("");
  }

  let id = setTimeout(()=>setShow(false),1000);

  const inputValueHandler = (e)=>{
    setInputValue(e.target.value)
  }
  return <div>
    <input type="text" value = {inputValue} onChange={inputValueHandler}/>
    <button onClick={buttonClickHandler}>Submit</button>
    <button>Show</button>
    <p>What do you want?</p>
    <span id = "span">{text}</span>
    {show && <ComponentNew id = {id}/>}
  </div>;
}
export default App;



