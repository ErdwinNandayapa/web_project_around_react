function PopupWithForm() {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__container">
          <button className="button popup__button-typeclose"></button>
          <span className="popup__title">Edit profile</span>
          <form className="popup__form">
            <fieldset className="popup__fieldset">
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
            </fieldset>
            <button
              className="button popup__button-typesave popup__button"
              id="popup__profile"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
