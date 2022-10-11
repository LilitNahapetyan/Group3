import Todo from "./Todo";
function Todos({ todos,deleteLi}) {
  return (
   <ol>
        {todos.map((todo) => (
          <Todo key={todo.key} todo={todo} deleteLi={deleteLi}/>
        ))}
        
    </ol>
  );
}

export default Todos;
