import UniqueCard from "../UniqueCard/UniqueCard";z
import "./Main.css";

function Main({cards}) {
  return (
    <div className="main-container">
       {cards.map((card)=><UniqueCard card={card} key={card.key} />)}
    </div>
  );
}

export default Main;