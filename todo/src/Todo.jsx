function Todo({todo,deleteLi}){
    return <li>{todo.value}
    <input type="button" value="X" onClick={()=>deleteLi(todo)} />
    </li>
}

export default Todo;