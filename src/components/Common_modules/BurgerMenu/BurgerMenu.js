import { Link } from "react-router-dom";
import "./BurgerMenu.css";

function BurgerMenu({ isOpen, onCloseBurgerMenu }) {
  return (
    // <div className="burger-menu burger-menu__active">
    <div
      className={`burger-menu ${isOpen ? "burger-menu" : "burger-menu_active"}`}
    >
      <button
        className="burger-menu__close"
        type="button"
        onClick={onCloseBurgerMenu}
      ></button>

      <div className="burger-menu__container">
        <Link className="burger-menu__main" to="/" onClick={onCloseBurgerMenu}>
          Главная
        </Link>

        <Link
          className="burger-menu__movies"
          to="/movies"
          onClick={onCloseBurgerMenu}
        >
          Фильмы
        </Link>

        <Link
          className="burger-menu__save-movies"
          to="/saved-movies"
          onClick={onCloseBurgerMenu}
        >
          Сохранённые фильмы
        </Link>

        <Link
          className="burger-menu__profile-link"
          to="/profile"
          onClick={onCloseBurgerMenu}
        >
          <div className="burger-menu__profile">Аккаунт</div>
        </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;
