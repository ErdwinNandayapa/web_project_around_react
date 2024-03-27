import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import CurrentUserContext from "./contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const fetchUserInfo = () => {
    api.getUserInfo().then((res) => {
      if (res) {
        setCurrentUser(res);
      }
    });
  };
  const handleUpdateUser = ({ name, about }) => {
    api.updateUserInfo({ name, about }).then((newUserData) => {
      setCurrentUser(newUserData);
      setIsEditProfilePopupOpen(false);
    });
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="body">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="add"
          title="Nuevo lugar"
          buttonName="Save"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="input-nameadd"
            id="input-nameimg"
            required
            minLength="2"
            maxLength="30"
            className="popup__input popup__input-name popup__input-name-add"
            placeholder="Title"
          />
          <p className="popup__input-span" id="input-nameimg-error"></p>
          <input
            type="url"
            name="input-url"
            id="input-jobimg"
            className="popup__input popup__input-profesion popup__input-linkadd"
            placeholder="Image link"
            required
          />
          <p className="popup__error-profesion" id="input-jobimg-error"></p>
        </PopupWithForm>

        <PopupWithForm
          name="confirmacion"
          title="Estás seguro"
          content="popup__content-conf"
          container="popup__containerConf"
          form="popup__form-conf"
          buttonName="Si"
          buttonClass="popup__confirm-button"
        >
          {" "}
        </PopupWithForm>
        <ImagePopup card={selectedCard} onclose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
