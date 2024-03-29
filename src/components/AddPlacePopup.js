import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name, link });
    setName("");
    setLink("");
  };

  return (
    <PopupWithForm
      name="add"
      title="Nuevo lugar"
      buttonName="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="popup__input-span" id="input-nameimg-error"></p>
      <input
        type="url"
        name="input-url"
        id="input-jobimg"
        className="popup__input popup__input-profesion popup__input-linkadd"
        placeholder="Image link"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <p className="popup__error-profesion" id="input-jobimg-error"></p>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
