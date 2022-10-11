import { useContext } from "react";
import { CardContext } from "../../App";
import "./UniqueCard.css";

function UniqueCard({ card}) {
  const deleteCard = useContext(CardContext);
  return (
    <div className="unique-card">
      {card.number}
      <button className="button-x" onClick={() => deleteCard(card.number)}>
        X
      </button>
    </div>
  );
}
export default UniqueCard;
