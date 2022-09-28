import "./UniqueCard.css";

function UniqueCard({ card, deleteCard }) {
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
