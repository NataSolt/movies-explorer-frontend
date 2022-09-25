import React from 'react';
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardlist/MoviesCardlist";
import More from './More/More';
// import Preloader from "../Preloader/Preloader";

function Movies() {
    return (
        <section className="movies">
             <SearchForm />
            <MoviesCardList/> 
            <More/>
            {/*<Preloader />*/}
        </section>
    )
}

export default Movies;