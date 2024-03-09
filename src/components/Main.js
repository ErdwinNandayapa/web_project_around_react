import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [useCards, setCards] = React.useState([]);

  const fetchUserInfo = () => {
    api
      .getUserInfo()
      .then((res) => {
        if (res) {
          setUserName(res?.name);
          setUserDescription(res?.about);
          setUserAvatar(res?.avatar);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch user info:", error);
      });
  };

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

  React.useEffect(() => {
    fetchUserInfo();
  }, []);
  React.useEffect(() => {
    fetchInitialCards();
  }, []);

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__overlay">
          <img className="profile__avatar" src={userAvatar} alt="Around" />
          <button
            className="profile__buttonAvatar"
            onClick={onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__edit">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              onClick={onEditProfileClick}
            ></button>
          </div>
          <p className="profile__profession">{userDescription}</p>
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
