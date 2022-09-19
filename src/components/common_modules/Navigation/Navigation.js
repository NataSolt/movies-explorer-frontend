import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__movies">
        <NavLink className="nav__movies-link" to="/movies">
          Фильмы
        </NavLink>

        <NavLink className="nav__saved-movies" to="/saved-movies">
          Сохранённые фильмы
        </NavLink>
      </div>
      <NavLink className="nav__profile-link" to="/profile">
        <div className="nav__profile">Аккаунт</div>
      </NavLink>
    </nav>
  );
}

export default Navigation;
