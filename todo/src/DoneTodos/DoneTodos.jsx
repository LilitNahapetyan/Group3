import DoneTodo from "./DoneTodo"
function DoneTodos({doneTodos}){
    return <ol>
        {doneTodos.map(todo => <DoneTodo todo={todo} key = {todo.key}/>)}
    </ol>
  
}

export default DoneTodos;

