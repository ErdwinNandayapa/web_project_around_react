function App() {
  return (
    <>
      <body class="body">
        <header className="header">
          <img className="header__logo" src="" alt="Around" />
        </header>
        <main className="container">
          <section className="profile">
            <div className="profile__overlay">
              <img className="profile__avatar" src="." alt="Around" />
              <button className="profile__buttonAvatar"></button>
            </div>
            <div className="profile__edit">
              <div className="profile__container">
                <h1 className="profile__name"></h1>
                <button className="profile__button-edit"></button>
              </div>
              <p className="profile__profession"></p>
            </div>
            <button className="profile__button-add"></button>
          </section>
          <section className="cards"></section>
        </main>
        <footer className="footer">
          <a
            href="https://github.com/ErdwinNandayapa"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__text"
          >
            &copy;2024 Erdwin Nandayapa
          </a>
        </footer>

        <div className="popup" id="popup__edit">
          <div className="popup__content popup__edit1">
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
                    minlength="2"
                    maxlength="40"
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
                    minlength="2"
                    maxlength="200"
                  />
                  <p
                    className="popup__error-profesion"
                    id="input-job-error"
                  ></p>
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

        <div className="popup" id="popup__add">
          <div className="popup__content popup__content-add">
            <div className="popup__container">
              <button className="button popup__button-typeclose popup__button-typecloseadd"></button>
              <span className="popup__title">New place</span>
              <form className="popup__form popup__form-add">
                <fieldset className="popup__fieldset">
                  <input
                    type="text"
                    name="input-nameadd"
                    id="input-nameimg"
                    required
                    minlength="2"
                    maxlength="30"
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
                  <p
                    className="popup__error-profesion"
                    id="input-jobimg-error"
                  ></p>
                </fieldset>
                <button
                  className="button popup__button popup__button-typesave"
                  id="submit__add"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>

        <template id="template__card">
          <div className="card">
            <img className="images__card" />
            <div className="card__info">
              <p className="card__text"></p>
              <button className="button button__type-like"></button>
              <button className="button button__delete"></button>
            </div>
            <div className="card__container-likes">
              <span className="card__likes"></span>
            </div>
          </div>
        </template>

        <div className="popup popup_image" id="popup_image">
          <div className="popup__content-image">
            <button className="button button button_close"></button>
            <img src="." alt="" className="popup__element popup__image" />
            <span className="popup__title popup__title_img"></span>
          </div>
        </div>

        <div className="popup" id="popup__edit1">
          <div className="popup__content popup__edit1">
            <div className="popup__container">
              <button className="button popup__button-typeclose"></button>
              <span className="popup__title">Edit profile</span>
              <form className="popup__form">
                <fieldset className="popup__fieldset">
                  <input
                    type="text"
                    name="input-name"
                    id="input-nameE"
                    required
                    minlength="2"
                    maxlength="40"
                    className="popup__input popup__input-name"
                    placeholder="Name"
                  />
                  <p className="popup__input-span" id="input-name-errorE"></p>
                  <input
                    type="text"
                    name="input-job"
                    id="input-jobE"
                    className="popup__input popup__input-profesion"
                    placeholder="Profession"
                    required
                    minlength="2"
                    maxlength="200"
                  />
                  <p
                    className="popup__error-profesion"
                    id="input-job-errorE"
                  ></p>
                </fieldset>
                <button
                  className="button popup__button-typesave popup__button"
                  id="popup__profileEdit"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup" id="popup__avatar">
          <div className="popup__content popup__content-Conf">
            <div className="popup__containerAvatar">
              <button className="button popup__button-typeclose popup__button-typecloseadd"></button>
              <span className="popup__title">Cambiar foto de perfil</span>
              <form className="popup__form popup__form-avatar">
                <fieldset className="popup__fieldset popup__fieldsetA">
                  <input
                    type="url"
                    name="input-url"
                    id="input-jobimgavatar"
                    className="popup__input popup__input-profesion popup__input-linkadd popup__input-avatar"
                    placeholder="Image link"
                    required
                  />
                  <p className="popup__error" id="input-jobimgavatar-error"></p>
                </fieldset>
                <button
                  className="button popup__button popup__button-typesave"
                  id="submit__avatar"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="popup" id="popup__confirmacion">
          <div className="popup__content popup__content-conf">
            <div className="popup__containerConf">
              <button className="button popup__button-typeclose popup__button-typecloseadd"></button>
              <span className="popup__titleConf">¿Estás seguro?</span>
              <form className="popup__form popup__form-conf">
                <button
                  className="button popup__button popup__confirm-button"
                  id="submit__conf"
                >
                  SI
                </button>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
