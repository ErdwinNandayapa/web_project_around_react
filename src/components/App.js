import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({ loading: true });
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.likeCard(card._id, isLiked).then((res) => {
      setCards((state) => state.map((c) => (c._id === card._id ? res : c)));
    });
  }

  function handleCardDelete(card) {
    setCardToDelete(card);
    setConfirmation(true);
  }

  const fetchInitialCards = () => {
    return api.getInitialCards().then((res) => {
      if (Array.isArray(res)) {
        setCards(res);
      }
    });
  };

  // useEffect(() => {
  //   fetchInitialCards();
  // }, []);

  const fetchUserInfo = () => {
    return api.getUserInfo().then((res) => {
      if (res) {
        setCurrentUser({ ...res, loading: false });
      }
    });
  };
  const handleUpdateUser = ({ name, about }) => {
    api.updateUserInfo({ name, about }).then((newUserData) => {
      setCurrentUser(newUserData);

      setIsEditProfilePopupOpen(false);
    });
  };
  const handleUpdateAvatar = (newAvatar) => {
    api.updateAvatar(newAvatar).then((updatedUser) => {
      setCurrentUser(updatedUser);
      setIsEditAvatarPopupOpen(false);
    });
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.getNewCards({ name, link }).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    });
  };

  useEffect(() => {
    Promise.all([fetchInitialCards(), fetchUserInfo()])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching initial data:", error);
        setIsLoading(false);
      });
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
    setConfirmation(false);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const hadleSubmitConfirm = (event) => {
    event.preventDefault();
    if (cardToDelete) {
      api.deleteCard(cardToDelete._id).then(() => {
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        closeAllPopups();
      });
    }
  };

  return isLoading ? (
    <div className="spinner"></div>
  ) : (
    <div className="body">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
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
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <PopupWithForm
          name="confirmacion"
          title="Estás seguro"
          content="popup__content-conf"
          container="popup__containerConf"
          form="popup__form-conf"
          buttonName="Si"
          buttonClass="popup__confirm-button"
          isOpen={confirmation}
          onClose={closeAllPopups}
          onSubmit={hadleSubmitConfirm}
        >
          {" "}
        </PopupWithForm>
        <ImagePopup card={selectedCard} onclose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
