import { useState } from "react";

let id = null;
export default function Timer() {
  const [value, setValue] = useState("");
  const [time, setTime] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const changeTime = () => {
    setTime(+value);
    setValue("");
  };
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const stopTimerHandler = () => {
    clearInterval(id);
  };

  const continueHandler = () => {
    id = null;
    startTimer();
  };
  const startTimer = () => {
    if (!id) {
      setDisableButton(true);
      id = setInterval(() => {
        setTime((prev) => {
          console.log(prev);
          if (prev === 0) {
            setDisableButton(false);
            clearInterval(id);
            id = null;
            return prev;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
    }
  };

  return (
    <div className="timer-container">
      <div className="timer-div">
        <div>
          <span className="time-text">Time: {time} </span>
          <button className="btn" onClick={startTimer} disabled={disableButton}>
            Start timer
          </button>
        </div>
        <div>
          <button className="btn2" onClick={stopTimerHandler}>
            Stop Timer
          </button>
          <button className="btn2" onClick={continueHandler}>
            Continue Timer
          </button>
        </div>
        <div>
          <input className="input" value={value} onChange={onChangeInput} />
          <button className="btn" onClick={changeTime}>
            Set Time
          </button>
        </div>
      </div>
    </div>
  );
}