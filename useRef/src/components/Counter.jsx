import { useEffect, useRef, useState } from "react";

const divStyle = {
  width: "250px",
  height: "120px",
  border: "1px solid black",
  margin: "5px",
  padding: "10px",
  fontSize: "30px",
};

function Counter({ id }) {
  const updateCount = useRef(-1); //{current:0}
  const divRef = useRef();
  const [count, setCount] = useState(0);
  const countAddBtn = () => {
    setCount((count) => count + 1);
    divRef.current.style.backgroundColor = `#${Math.round(
      Math.random() * 1000000
    )}`;
    console.log(divRef);
  };
  useEffect(() => {
    console.log(updateCount.current + " update " + id);
    updateCount.current++;
  });

  return (
    <div style={divStyle} ref={divRef}>
      Counter: {id}
      <div>
        {count} <button onClick={countAddBtn}>Add</button>
      </div>
    </div>
  );
}

export default Counter;
