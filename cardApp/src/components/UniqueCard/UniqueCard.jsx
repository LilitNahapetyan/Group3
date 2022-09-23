import "./UniqueCard.css"

function UniqueCard({card}){
    return <div className="unique-card">
        {card.number}
        <button>X</button>
    </div>
}
export default UniqueCard;
