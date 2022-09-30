import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="pagenotfound">
      <h2 className="pagenotfound__title">404</h2>
      <p className="pagenotfound__text">Страница не найдена</p>
      <Link to="/" className="pagenotfound__link">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
