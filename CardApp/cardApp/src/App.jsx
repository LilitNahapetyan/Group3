import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import { generateUniqueNumber } from "./generateUniqueNumber";

import "./App.css";
import { useState,useReducer } from "react";
import { createContext } from "react";

const light = {
  backgroundColor : "white"
}
const dark = {
  backgroundColor : "#555464",
}
function reducer(state,action){
  if(action.type == "sort"){
    return [...state.sort(function(a,b){
      return a.number - b.number
    })]
  }else if(action.type == "add"){
    return [
      ...state,
      {
        number: generateUniqueNumber(),
        key: new Date() * Math.random(),
      },
    ]
  }else if(action.type == "delete"){
    return state.filter((card) => card.number !== action.payload.number)
  }
}
export const CardContext = createContext();
function App() {
  const [cards, dispatch] = useReducer(reducer, []);
  const [screenMode,setScreenMode] = useState(light);
  const addButton = () => {
    dispatch({type:"add"})
  };
  const sortCard = () => {
    dispatch({type:"sort"})
  };
  const deleteCard = (number) => {
    dispatch({type:"delete",payload : {number:number}})
  };

  const darkMode = ()=>{
    setScreenMode(dark)
  }
  const lightMode = ()=>{
    setScreenMode(light)
  }
  return (
    <div className="card-application" style={screenMode}>
      <div className="main-content">
        <Header addButton={addButton} sortCard={sortCard} cards={cards}/>
        <CardContext.Provider value={deleteCard}>
          <Main cards={cards} />
        </CardContext.Provider>
        <Footer/>
      </div>
      <Aside darkMode={darkMode} lightMode = {lightMode}/>
    </div>
  );
}

export default App;
