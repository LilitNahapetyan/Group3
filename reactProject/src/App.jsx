import { useState } from "react";
import "./App.css";
import ResizeScreen from "./ResizeScreen";

function App() {
  const [show, setShow] = useState(true);
  const showF = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showF}>Show/Unshow</button>
      {show && <ResizeScreen />}
    </div>
  );
}

export default App;
