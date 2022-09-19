import { Route } from "react-router-dom";
//import Main from "../Main/Main";
import Header from "../common_modules/Header/Header";
import  "./App.css";

const headerPath = ["/movies", "/", "/saved-movies","/profile" ];

function App() {
  return (
        <div className="page">
        <Route exact path={headerPath}>
        <Header />
        </Route>
         
      
    </div>
  );
}

export default App;
