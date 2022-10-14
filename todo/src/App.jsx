import { useReducer, useState } from "react";
import DoneTodos from "./DoneTodos/DoneTodos";
import Todos from "./Todos";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          value: action.payload.value,
          key: Math.random() * new Date(),
          id: Math.ceil(Math.random() * new Date()),
        },
      ];
    case "deleteLi":
      return [...state.filter((todo) => todo.id !== action.payload.id)];
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");
  const [doneTodos,setDoneTodos] = useState([]);

  const setInputValueHAndler = (value) => {
    setInputValue(value);
  };

  const deleteLi = (todo) => {
    setDoneTodos([...doneTodos,todo]);
    dispatch({ type: "deleteLi", payload: { id: todo.id} });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(),
            dispatch({ type: "add", payload: { value: inputValue } }),
            setInputValue("");
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValueHAndler(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>

      <Todos todos={todos} deleteLi={deleteLi} />
      <p>Done!</p>
      <DoneTodos doneTodos = {doneTodos}/>
    </div>
  );
}

export default App;
