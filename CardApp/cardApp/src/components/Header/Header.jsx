import "./Header.css";

function Header({addButton,sortCard,cards}) {
  return (
    <div className="header-container">
      <div className="button-container">
        <button className="button" onClick={addButton} disabled = {cards.length > 999}>Add Card</button>
        <button className="button" onClick={sortCard}>Sort Cards</button>
      </div>
    </div>
  );
}
export default Header;
