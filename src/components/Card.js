import React, { useContext } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  // const isOwn = card.owner._id === currentUser._id;
  // const cardDeleteButtonClassName = `button__delete ${
  //   isOwn ? "button button__delete" : "button__delete_visible"
  // }`;

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
        <button className="button button__type-like"></button>
        <button className="button button__delete"></button>
      </div>
      <div className="card__container-likes">
        <span className="card__likes">{card.likes.length}</span>
      </div>
    </div>
  );
}

export default Card;
