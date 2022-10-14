import {useState } from "react";

let id = "";
function Timer() {
  const [time, setTime] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [disableBtn,setDisableBtn] = useState(false);
  const setTimef = ()=>{
    id = setInterval(()=>{
      setTime(prev=>{
        if(prev > 0){
          return prev - 1;
        }else{
          clearInterval(id);
          setDisableBtn(false);
          id = null;
          return 0;
        }
      })
  },1000)
  }

  const setInputValueHandler = (value)=>{
    setInputValue(value);
  }

  const stopTimer = ()=>{
    clearInterval(id);
    id = null;
  }

  const continueTimer = ()=>{
   setTimef();
  }
 
  const setTimeHandler = ()=>{
    if(!id){
      if(!isNaN(inputValue) && inputValue.replaceAll(" ","")){
        setTime(inputValue);
        setInputValue("")
      }
      setDisableBtn(true);
      setTimef();
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValueHandler(e.target.value)
          }}
        />
        <button onClick={setTimeHandler} disabled = {disableBtn}>Set Time</button>
      </div>
      <div>
        <span>Time : {time}</span>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={continueTimer}>Continue</button>
      </div>
    </div>
  );
}

export default Timer;
