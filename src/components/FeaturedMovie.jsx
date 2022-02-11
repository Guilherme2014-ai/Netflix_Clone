import React from "react";

import tmdbConfig from "../config/tmdbConfig";
import BunttonComponent from "./BunttonComponent";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


import "./FeaturedMovie.css";

const { imagesBaseUrl } = tmdbConfig;

const FeaturedMovie = ({ content }) => {
    const data = content["data"];
    const { name: serieName, backdrop_path: imageBackground, vote_average: rating, poster_path, first_air_date, overview: sinopse, genres, seasons } = data;
    const yearDate = first_air_date.split("-")[0];

    const numberOfSeasons = seasons.length;
    const genresOrganizeds = `${genres.map(genreObj => genreObj.name).join(" ")}`;

    return (
        <section className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundImage: `url(${imagesBaseUrl}original${imageBackground || poster_path})`
        }}>
            
            <div className="feature-vertical">
                <div className="feature-horizontal">
                    <div className="content">
                        
                        <h3>{serieName}</h3><ArrowBackIosNewIcon />
                        <div className="info">
                            <strong style={{
                                color: "rgb(11, 192, 65)"
                            }}>{rating} Pontos</strong> <strong>{yearDate}</strong> <strong>{numberOfSeasons} Temporada{numberOfSeasons > 1 && "s"}</strong>
                            <p className="sinopse">{sinopse}</p>
                        </div>
                    
                        <div className="buttons">
                            <BunttonComponent backgrounColor="white" color="black">Assistir</BunttonComponent> <BunttonComponent backgrounColor="#494949" color="white">Minha Lista</BunttonComponent>
                        </div>
                        <small><strong>Generos: </strong>{genresOrganizeds}</small>
                    </div>
                </div>
            </div>

        </section>
    );
};

// Infos verdadeiras e a nav do netflix

export default FeaturedMovie;
