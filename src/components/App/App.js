import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Header from "../common_modules/Header/Header";
import Footer from "../common_modules/Footer/Footer";
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
