function Main() {
  return (
    <main className="container">
      <section className="profile">
        <div className="profile__overlay">
          <img className="profile__avatar" src="" alt="Around" />
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
  );
}

export default Main;
