import Card from "./Card";

function CardContainner({ users}) {
  console.log("card container");
  return (
    <div className="card-container">
      {users.map((user) => (
        <Card id={user.id} login={user.login} avatar_url={user.avatar_url} key={user.id} />
      ))}
    </div>
  );
}

export default CardContainner;
