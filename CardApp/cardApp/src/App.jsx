import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import { generateUniqueNumber } from "./generateUniqueNumber";

import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  const addButton = () => {
    setCards([
      ...cards,
      {
        number: generateUniqueNumber(),
        key: new Date() * Math.random()
      },
    ]);
  };
  const sortCard = () => {
    alert(new Date() * Math.random())
  };
  return (
    <div className="card-application">
      <div className="main-content">
        <Header addButton={addButton} sortCard={sortCard} cards={cards}/>
        <Main cards={cards} />
        <Footer />
      </div>
      <Aside />
    </div>
  );
}

export default App;
