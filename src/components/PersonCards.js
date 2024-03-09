import { getUsers } from "../person";
import { useState, useEffect } from "react";
import "../list.css";
import LikeButton from "./LikeButtin";

function PersonCards() {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async function () {
      setList(await getUsers());
    })();
  }, []);

  const handleDelete = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const personList = list.map((person, index) => {
    return (
      <li className="card" key={index}>
        <button onClick={() => handleDelete(index)}>Delete</button>
        <LikeButton list={person} />
        <img src={person.picture.large} />
        <p className="name">
          {person.name.title} {person.name.first} {person.name.last}
        </p>
      </li>
    );
  });

  return (
    <>
      <ul className="list-cards">{personList}</ul>
    </>
  );
}

export default PersonCards;
