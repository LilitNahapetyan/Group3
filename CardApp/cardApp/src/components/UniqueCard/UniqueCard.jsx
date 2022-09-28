import "./UniqueCard.css"

function UniqueCard({card}){
    return <div className="unique-card">
        {card.number}
        <button className="button-x">X</button>
    </div>
}
export default UniqueCard;
