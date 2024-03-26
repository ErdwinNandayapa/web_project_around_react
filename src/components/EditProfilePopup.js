import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="edit"
      title="Editar perfil"
      buttonName="Save"
      isOpen={isOpen}
      onClose={onClose}
    >
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
  );
}

export default EditProfilePopup;
