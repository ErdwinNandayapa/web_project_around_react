import React from "react";

function PopupWithForm({
  name,
  title,
  content,
  container,
  form,
  filset,
  children,
  buttonName,
  buttonClass,
}) {
  return (
    <div className={`popup1 popup__${name}`}>
      <div className={`popup__content ${content ? content : ""} `}>
        <div className={`popup__container ${container ? container : ""}`}>
          <button className="button popup__button-typeclose"></button>
          <span className="popup__title">{title}</span>
          <form className={`popup__form ${form ? form : ""} `}>
            <fieldset className={`popup__fieldset ${filset ? filset : ""} `}>
              {children}
            </fieldset>
            <button
              className={`button popup__button-typesave popup__button ${buttonClass}`}
              id="popup__profile"
            >
              {buttonName}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
