import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Header from "../common_modules/Header/Header";
import Footer from "../common_modules/Footer/Footer";
import Register from "../user/Register/Register";
//import Login from "../Login/Login";
//import Profile from "../Profile/Profile";
import "./App.css";

const headerPath = ["/movies", "/", "/saved-movies", "/profile"];
const FooterPath = ["/movies", "/", "/saved-movies"];

function App() {
  return (
    <div className="page">
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

        {/* <Route exact path="/sign-in">
                        <Login />
                    </Route> */}

        {/* <Route exact path="/profile">
                        <Profile />
                    </Route> */}

        <Route exact path="/movies">
          <Movies />
        </Route>

        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        {/* <Route path="*">
          <PageNotFound />
        </Route> */}
      </Switch>

      <Route exact path={FooterPath}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
