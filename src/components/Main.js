import React from "react";
import Card from "./Card";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
  onLogin,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return onLogin ? (
    <div className="spinner"></div>
  ) : currentUser.loading ? (
    <div className="cargando">Cargando perfil del usuario...</div>
  ) : (
    <main className="container">
      <section className="profile">
        <div className="profile__overlay">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
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
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
