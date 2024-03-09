import React from "react";
function Card({ card, onCardClick }) {
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
