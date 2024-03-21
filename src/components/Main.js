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
  // const [useCards, setCards] = useState([]);

  const { currentUser, currentCard: useCards } = useContext(CurrentUserContext);

  // const fetchInitialCards = () => {
  //   api
  //     .getInitialCards()
  //     .then((res) => {
  //       if (Array.isArray(res)) {
  //         setCards(res);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch initial cards:", error);
  //     });
  // };

  // useEffect(() => {
  //   fetchInitialCards();
  // }, []);

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
        {useCards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
