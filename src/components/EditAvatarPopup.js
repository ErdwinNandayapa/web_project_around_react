import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  const hadleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar(inputRef.current.value);
    console.log(inputRef.current.value);
  };

  return (
    <PopupWithForm
      name="avatar"
      title="Actualizar foto de perfil"
      content=" popup__content-Conf"
      container="popup__containerAvatar"
      form="popup__form-avatar"
      filset="popup__fieldsetA"
      buttonName="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={hadleSubmit}
    >
      <input
        type="url"
        name="input-url"
        id="input-jobimgavatar"
        className="popup__input popup__input-profesion popup__input-linkadd popup__input-avatar"
        placeholder="Image link"
        required
        ref={inputRef}
      />
      <p className="popup__error" id="input-jobimgavatar-error"></p>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
