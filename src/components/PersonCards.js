import list from "../person";

function PersonCards() {
  const personList = list.map((person) => {
    return (
      <li className="card" key={person.id}>
        <img src={person.picture} />
        <p>{person.title}</p>
        <p>{person.first}</p>
        <p>{person.last}</p>
      </li>
    );
  });
  console.log(list);
  return <ul>{personList}</ul>;
}

export default PersonCards;
