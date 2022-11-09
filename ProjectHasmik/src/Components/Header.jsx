import { Link } from "react-router-dom";
import { useState } from "react";

const light = {
  backgroundColor: "white",
};
const dark = {
  backgroundColor: "#555464",
};

function Header() {
  const [screenMode, setScreenMode] = useState(light);

  const mode = () => {
    setScreenMode((screenMode) => (screenMode == dark ? light : dark));
  };

  return (
    <div className="navbar" style={screenMode}>
      <Link to="/" className="link">
        <div className="name"> FOODY</div>
      </Link>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/fruits" className="link">
        Fruits
      </Link>
      <Link to="/vegetables" className="link">
        Vegetbles
      </Link>
      <Link to="/fresh" className="link">
        Fresh
      </Link>
      <Link to="/shoppingCard" className="link">
        My Shopping
      </Link>
      <div className="search">
        <button className="button" onClick={mode}>
          Dark/Light
        </button>
      </div>
    </div>
  );
}

export default Header;
