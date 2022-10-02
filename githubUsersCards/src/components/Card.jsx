function Card({ id, login, avatar_url,deleteButton}) {
  return (
    <div className="card">
      <button onClick={()=>deleteButton(id)}>X</button>
      <div className="card-img">
        <img src={avatar_url} className="card-img" />
      </div>
      <button className="select-button">Select</button>
      <p>Id: {id}</p>
      <span className="login">{login} </span>
    </div>
  );
}

export default Card;
