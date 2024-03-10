import { useState } from "react";

function LikeButton(props) {
  let [like, setLike] = useState([false]);
  const [fav, setFav] = useState([]);
  function handleClick() {
    setLike(!like);
    if (like) {
      setFav(props);
      props.list.fav = "fav";
    } else {
      props.list.fav = null;
      setFav(false);
    }
    return fav.list;
  }

  return (
    <button className="like-button" onClick={handleClick}>
      <svg
        className={like ? "like-inactive" : "like-active"}
        fill="none"
        height="25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

export default LikeButton;
