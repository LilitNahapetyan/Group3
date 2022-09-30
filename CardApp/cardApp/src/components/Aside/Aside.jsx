import "./Aside.css";

function Aside({darkMode,lightMode}) {
  return (
    <div className="aside-container">
      <div className="asideButtons">
        <button className="button1" onClick={darkMode}>Dark</button>
        <button className="button1" onClick={lightMode}>Light</button>
      </div>
    </div>
  );
}

export default Aside; 
