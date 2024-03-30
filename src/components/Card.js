import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = currentUser && card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `button button__delete ${
    isOwn ? "button button__delete" : "button__delete_visible"
  }`;
  const isLiked =
    currentUser && card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `button button__type-like ${
    isLiked ? "button__like-active button__like" : ""
  } `;
  const handleLikeClick = () => {
    onCardLike(card);
  };

  return (
    <div key={card._id} className="card">
      <img
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick(card)}
        className="images__card"
      />
      <div className="card__info">
        <p className="card__text">{card.name}</p>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick}
        ></button>
        <button
          className={cardDeleteButtonClassName}
          onClick={() => onCardDelete(card)}
        ></button>
      </div>
      <div className="card__container-likes">
        <span className="card__likes">{card.likes.length}</span>
      </div>
    </div>
  );
}

export default Card;
