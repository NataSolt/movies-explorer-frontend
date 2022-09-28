import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Header from "../Common_modules/Header/Header";
import Footer from "../Common_modules/Footer/Footer";
import Register from "../User/Register/Register";
import Login from "../User/Login/Login";
import Profile from "../User/Profile/Profile";
import PageNotFound from "../Common_modules/PageNotFound/PageNotFound";
import "./App.css";

// import CurrentUserContext from "../../context/currentUserContext";
//import moviesApi from "../../utils/MoviesApi";
// import mainApi from "../../utils/MainApi";
//import * as auth from '../../utils/auth.js';

const headerPath = ["/movies", "/", "/saved-movies", "/profile"];
const FooterPath = ["/movies", "/", "/saved-movies"];

function App() {
  return (
    <div className="page" lang="ru">
      <Route exact path={headerPath}>
        <Header />
      </Route>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/sign-up">
          <Register />
        </Route>

        <Route exact path="/sign-in">
          <Login />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/movies">
          <Movies />
        </Route>

        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <Route exact path={FooterPath}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
