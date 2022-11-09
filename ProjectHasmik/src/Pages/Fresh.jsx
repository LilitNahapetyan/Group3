import { useState } from "react";
import SingleProduct from "../Components/SingleProduct";

function Fresh({ addToCard, fruits }) {
  const [Fresh, setFresh] = useState([...fruits]);
  const [inputValue, setInputValue] = useState("");

  const changeInput = (val) => {
    setInputValue(val);
  };

  const search = () => {
    setFruitsState(
      fruitsState.filter((val) => val.title.toLowerCase().includes(inputValue))
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
        {Fresh.filter((val) => val.fresh == "true").map((val) => {
          return (
            <SingleProduct
              title={val.title}
              imgSrc={val.img}
              id={val.id}
              key={val.id}
              addToCard={addToCard}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Fresh;
