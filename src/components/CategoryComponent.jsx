import React from "react"
import { idUniqueV2 } from "id-unique-protocol";

import "./CategoryComponent.css"
import tmdbConfig from "../config/tmdbConfig";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const { imagesBaseUrl } = tmdbConfig;

const CategoryComponent = ({ categoryTitle, categoryMovies }) => {
    return (
        <div className="category">
            <h1><strong>{ categoryTitle }</strong></h1>
            <div className="arrow arw-left"><ArrowBackIosNewIcon /></div>
            <div className="arrow arw-right"><ArrowForwardIosIcon /></div>

            <div className="movies-list">
                <div className="movies">
                    { categoryMovies.map(movie => {
                        const { name: movieName, title: movieTitle, poster_path: imagePosterImage_path } = movie;
                        const imageSize = 200;
                        const imageSizeUrl = "w200";

                        return (
                            <div className="movie" key={idUniqueV2()}>
                                <img width={imageSize} src={`${imagesBaseUrl}${imageSizeUrl}${imagePosterImage_path}`} alt="movie_poster"/>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    )
};

export default CategoryComponent;

// <h2>{ `${movieName || movieTitle}` }</h2>
