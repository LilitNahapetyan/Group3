import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import { generateUniqueNumber } from "./generateUniqueNumber";

import "./App.css";
import { useState } from "react";

const light = {
  backgroundColor : "white"
}
const dark = {
  backgroundColor : "#555464",
}
function App() {
  const [cards, setCards] = useState([]);
  const [screenMode,setScreenMode] = useState(light);
  const addButton = () => {
    setCards([
      ...cards,
      {
        number: generateUniqueNumber(),
        key: new Date() * Math.random(),
      },
    ]);
  };
  const sortCard = () => {
    console.log(cards.sort(function(a,b){
      return a.number - b.number
    }));
    setCards([...cards.sort(function(a,b){
      return a.number - b.number
    })])
  };
  const deleteCard = (number) => {
    setCards(cards.filter((card) => card.number !== number));
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
        <Main cards={cards} deleteCard={deleteCard} />
        <Footer />
      </div>
      <Aside darkMode={darkMode} lightMode = {lightMode}/>
    </div>
  );
}

export default App;
