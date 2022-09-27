import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <>
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__container">
          <label className="profile__box">
            <span className="profile__text">Имя</span>
            <input
              className="profile__input"
              name="name"
              type="text"
              required
            />
          </label>

          <label className="profile__box">
            <span className="profile__text">E-mail</span>
            <input
              className="profile__input"
              name="email"
              type="email"
              required
            />
          </label>
          <button className="profile__button" type="button">
            Редактировать
          </button>
          <Link className="profile__link" to="/">
            Выйти из аккаунта
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;
