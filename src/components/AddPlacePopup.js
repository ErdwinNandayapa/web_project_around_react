import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add"
      title="Nuevo lugar"
      buttonName="Save"
      isOpen={isOpen}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;
