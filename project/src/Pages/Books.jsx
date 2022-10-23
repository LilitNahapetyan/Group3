import { useEffect, useState } from "react";
import SingleBook from "../Components/SingleBook";
import books from "../DATA";

function Books() {
  const [bookState, setBooksState] = useState([...books]);

  
  return (
    <div className="books">
      {bookState.map((book) => (
        <SingleBook title={book.title} imgSrc={book.img} key={book.id}/>
      ))}
    </div>
  );
}

export default Books;
