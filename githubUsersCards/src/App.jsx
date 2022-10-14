import { useCallback, useEffect, useState } from "react";
import CardContainner from "./components/CardContainer";
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);
  const [staticUsers,setStaticUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
 const [val,setVal] = useState(0);
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


  // const inputChangeHandler = useCallback((value) => {
  //   setInputValue(value);
  // },[inputValue]);

  // const deleteButton = useCallback((id)=>{
  //   setUsers(users.filter(user => user.id !== id));
  //   setStaticUsers(users.filter(user => user.id !== id));
  // },[users])

  return (
    <div>
      <p>{val}</p>
      <button onClick={()=>setVal(prev=>prev+1)}>Add</button>
      <input
        value={inputValue}
        // onChange={(e) => inputChangeHandler(e.target.value)}
      />
      <CardContainner users={users}/>
    </div>
  );
}

export default App;
