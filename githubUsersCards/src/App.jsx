import { useEffect, useState } from "react";
import CardContainner from "./components/CardContainer";
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);
  const [staticUsers,setStaticUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
 
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((responce) => responce.json())
      .then((json) => {
        setUsers(json),
        setStaticUsers(json);
      });
  }, []);


  useEffect(()=>{
    if(inputValue.length > 2){
      setUsers(staticUsers.filter(user => user.login.includes(inputValue)))
    }else{
      setUsers(staticUsers)
    }
  },[inputValue])


  const inputChangeHandler = (value) => {
    setInputValue(value);
  };
  const deleteButton = (id)=>{
    setUsers(users.filter(user => user.id !== id));
    setStaticUsers(users.filter(user => user.id !== id));
  }
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
      <CardContainner users={users} deleteButton={deleteButton}/>
    </div>
  );
}

export default App;
