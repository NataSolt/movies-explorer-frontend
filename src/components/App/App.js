import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main";
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
      </Switch>

      <Route exact path={FooterPath}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
