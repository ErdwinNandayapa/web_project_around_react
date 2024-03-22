import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import { useEffect, useState, useContext } from "react";
import CurrentUserContext from "./contexts/CurrentUserContext";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
}) {
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .likeCard(card._id, isLiked)
      .then((res) => {
        setCards((state) => state.map((c) => (c._id === card._id ? res : c)));
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  const fetchInitialCards = () => {
    api
      .getInitialCards()
      .then((res) => {
        if (Array.isArray(res)) {
          setCards(res);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch initial cards:", error);
      });
  };

  useEffect(() => {
    fetchInitialCards();
  }, []);

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__overlay">
          <img
            className="profile__avatar"
            src={currentUser?.avatar}
            alt="Avatar"
          />{" "}
          <button
            className="profile__buttonAvatar"
            onClick={onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__edit">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser?.name}</h1>{" "}
            <button
              className="profile__button-edit"
              onClick={onEditProfileClick}
            ></button>
          </div>
          <p className="profile__profession">{currentUser?.about}</p>{" "}
        </div>
        <button
          className="profile__button-add"
          onClick={onAddPlaceClick}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
