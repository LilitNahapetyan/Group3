import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";

import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      number: 1,
      key:1
    },
    {
      number: 2,
      key:2
    },
  ]);
  return (
    <div className="card-application">
      <div className="main-content">
        <Header />
        <Main cards={cards}/>
        <Footer />
      </div>
      <Aside />
    </div>
  );
}

export default App;
