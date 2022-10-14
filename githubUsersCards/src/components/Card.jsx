import { useCallback, useState } from "react";
// const light = {
//   backgroundColor : "green"
// }
// const dark = {
//   backgroundColor : "rgb(30, 109, 135)"
// }

function Card({ id, login, avatar_url}) {
  const [clicked, setClicked] = useState(false);

  console.log("hi");
  const selectUser = () => {
    setClicked(!clicked);
  };

    //   const [screenMode,setScreenMode] = useState(dark);

  // const setScreenModeHandler = ()=>{
  //   if(screenMode == dark){
  //     setScreenMode(light)
  //   }else{
  //     setScreenMode(dark)
  //   }
  // }
  //<div className="card" style={screenMode}>

  return (
    <div className={`card ${clicked ? "clicked" : ""}`}>
      <button>X</button>
      <div className="card-img">
        <img src={avatar_url} className="card-img" />
      </div>
      <button className="select-button" onClick={selectUser}>
        Select
      </button>
      <p>Id: {id}</p>
      <span className="login">{login} </span>
    </div>
  );
}

export default Card;
