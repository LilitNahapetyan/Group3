import Card from "./Card";

function CardContainner({ users,deleteButton}) {
  return (
    <div className="card-container">
      {users.map((user) => (
        <Card id={user.id} login={user.login} avatar_url={user.avatar_url} key={user.id} deleteButton={deleteButton} />
      ))}
    </div>
  );
}

export default CardContainner;
