import React, { useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

import "./CategoryComponent.css"
import tmdbConfig from "../config/tmdbConfig";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const { imagesBaseUrl } = tmdbConfig;

const CategoryComponent = ({ categoryTitle, categoryMovies }) => {
    const [ positionMovies, setPositionMovies ] = useState(0);
    const [ currentLimit, setCurrentLimit ] = useState(0);

    const salt = 1020;
    const moviesPassedInOneSalt = 4;

    const limit = categoryMovies.length/moviesPassedInOneSalt-2;

    function toRightFunc() {
        const increaseValue = positionMovies-salt;

        setCurrentLimit(currentLimit+1);
        setPositionMovies(increaseValue);
    }
    function toLeftFunc() {
        const decreaseValue = positionMovies+salt;
        
        setCurrentLimit(currentLimit-1);
        setPositionMovies(decreaseValue);
    }    
    
    // Desenvolver lógica do limite.

    return (
        <div className="category">
            <h1><strong>{ categoryTitle }</strong></h1>
            {
                positionMovies && <div className="arrow arw-left" onClick={toLeftFunc}><ArrowBackIosNewIcon/></div>
            }
            {
                currentLimit < limit && <div className="arrow arw-right" onClick={toRightFunc}><ArrowForwardIosIcon/></div>
            }

            <div className="movies-list" style={{
                marginLeft: `${positionMovies}px`,
                transition: "all ease 0.5s"
            }}>
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
