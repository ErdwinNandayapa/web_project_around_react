function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector("#popup__avatar").classList.add("popup_open");
  };
  const handleEditProfileClick = () => {
    document.querySelector("#popup__edit").classList.add("popup_open");
  };
  const handleAddPlaceClick = () => {
    document.querySelector("#popup__add").classList.add("popup_open");
  };

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__overlay">
          <img className="profile__avatar" src="" alt="Around" />
          <button
            className="profile__buttonAvatar"
            onClick={handleEditAvatarClick}
          ></button>
        </div>
        <div className="profile__edit">
          <div className="profile__container">
            <h1 className="profile__name"></h1>
            <button
              className="profile__button-edit"
              onClick={handleEditProfileClick}
            ></button>
          </div>
          <p className="profile__profession"></p>
        </div>
        <button
          className="profile__button-add"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section className="cards"></section>
    </main>
  );
}

export default Main;
