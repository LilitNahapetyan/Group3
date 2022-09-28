import UniqueCard from "../UniqueCard/UniqueCard";
import "./Main.css";

function Main({cards,deleteCard}) {
  return (
    <div className="main-container">
       {cards.map((card)=><UniqueCard card={card} key={card.key} deleteCard = {deleteCard}/>)}
    </div>
  );
}

export default Main;