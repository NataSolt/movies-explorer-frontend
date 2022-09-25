//import {Route} from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardlist.css";

function MoviesCardList() {
    return (
        <div className="moviescardlist">
            <ul className="moviescardlist__container">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </ul>
        </div>
    );
}

export default MoviesCardList;