import { useState } from "react";
import LikeButton from "./LikeButtin";

function SeeFav(props) {
  const [fav, setFav] = useState([]);
  const handleDelete = (index) => {
    setFav((prevList) => prevList.filter((_, i) => i !== index));
  };
  const favList = props.list.map((person, index) => {
    if ((props.list.fav = "fav")) {
      setFav(person);
      return (
        <li className="card" key={index}>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <LikeButton list={person} />
          <img src={props.list.picture.large} />
          <p className="name">
            {person.name.title} {person.name.first} {person.name.last}
          </p>
        </li>
      );
    }
  });
  console.log("favlist = ", favList);
  return <ul className="list-cards">{favList}</ul>;
}

export default SeeFav;
