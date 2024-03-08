import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  return (
    <>
      <div className="body">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="edit" title="Editar perfil" buttonName="Save">
          <input
            type="text"
            name="input-name"
            id="input-name"
            required
            minLength="2"
            maxLength="40"
            className="popup__input popup__input-name"
            placeholder="Name"
          />
          <p className="popup__input-span" id="input-name-error"></p>
          <input
            type="text"
            name="input-job"
            id="input-job"
            className="popup__input popup__input-profesion"
            placeholder="Profession"
            required
            minLength="2"
            maxLength="200"
          />
          <p className="popup__error-profesion" id="input-job-error"></p>
        </PopupWithForm>
        <PopupWithForm name="add" title="Nuevo lugar" buttonName="Save">
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
          name="avatar"
          title="Actualizar foto de perfil"
          content=" popup__content-Conf"
          container="popup__containerAvatar"
          form="popup__form-avatar"
          filset="popup__fieldsetA"
          buttonName="Save"
        >
          <input
            type="url"
            name="input-url"
            id="input-jobimgavatar"
            className="popup__input popup__input-profesion popup__input-linkadd popup__input-avatar"
            placeholder="Image link"
            required
          />
          <p className="popup__error" id="input-jobimgavatar-error"></p>
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
      </div>
    </>
  );
}

export default App;
