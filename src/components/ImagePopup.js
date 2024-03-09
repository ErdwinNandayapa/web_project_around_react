function ImagePopup({ card, onclose }) {
  return (
    <div
      className={`popup popup_image ${card ? "popup_open" : ""}`}
      id="popup_image"
    >
      <div className="popup__content-image">
        <button
          className="button button button_close"
          onClick={onclose}
        ></button>
        <img
          src={card?.link}
          alt={card?.name}
          className="popup__element popup__image"
        />
        <span className="popup__title popup__title_img">{card?.name}</span>
      </div>
    </div>
  );
}

export default ImagePopup;
