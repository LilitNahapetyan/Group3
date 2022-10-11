import { useCallback, useState } from "react";
// const light = {
//   backgroundColor : "green"
// }
// const dark = {
//   backgroundColor : "rgb(30, 109, 135)"
// }

function Card({ id, login, avatar_url, deleteButton }) {
  const [clicked, setClicked] = useState(false);
const[hi,setHi] = useState(true);

  const selectUser = () => {
    setClicked(!clicked);
  };

  const handleSelectUser = () => {
    console.log("hi "+id);
  }
  handleSelectUser();
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
      <button onClick={() => deleteButton(id)}>X</button>
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
