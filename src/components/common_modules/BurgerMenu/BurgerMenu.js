import { Link } from "react-router-dom";
import "./BurgerMenu.css"

function BurgerMenu() {
  return (
    <div className="burger-menu burger-menu__active">
      <button className="burger-menu__close" type="button"></button>

      <div className="burger-menu__container">
        <Link className="burger-menu__main" to="/">
          Главная
        </Link>

        <Link className="burger-menu__movies" to="/movies">
          Фильмы
        </Link>

        <Link className="burger-menu__save-movies" to="/saved-movies">
          Сохранённые фильмы
        </Link>

        <Link className="burger-menu__profile-link" to="/profile">
        <div className="burger-menu__profile">Аккаунт</div>
      </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;
