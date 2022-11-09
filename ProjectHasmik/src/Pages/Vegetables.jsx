import { useState } from "react";
import SingleProduct from "../Components/SingleProduct";

function Vegetables({ addToCard, fruits }) {
  const [vegetablesState, setVegetablesState] = useState([...fruits]);
  const [inputValue, setInputValue] = useState("");
  const changeInput = (val) => {
    setInputValue(val);
  };
  const search = () => {
    setVegetablesState(
      vegetablesState.filter((val) =>
        val.title.toLowerCase().includes(inputValue)
      )
    );
    setInputValue("");
  };
  return (
    <div>
      <div className="searchbtn">
        <input
          className="searchinput"
          value={inputValue}
          onChange={(e) => changeInput(e.target.value)}
        />
        <button className="searchbutton" onClick={search}>
          Search
        </button>
      </div>
      <div className="Fresh">
        {vegetablesState
          .filter((veg) => veg.tip == "vegetables")
          .map((veg) => {
            return (
              <SingleProduct
                title={veg.title}
                id={veg.id}
                imgSrc={veg.img}
                key={veg.id}
                addToCard={addToCard}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Vegetables;
