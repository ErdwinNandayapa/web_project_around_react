import React, { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Editar perfil"
      buttonName="Save"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        value={name}
        onChange={handleNameChange}
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
        value={description}
        onChange={handleDescriptionChange}
      />
      <p className="popup__error-profesion" id="input-job-error"></p>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
