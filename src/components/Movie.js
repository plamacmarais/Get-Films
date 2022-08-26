import React from "react";
import Card from 'react-bootstrap/Card'
import ReactLogo from '../assets/Logo.svg';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  return (
    <Card style={{width: "22rem"}}>
    <div className="movie">
      <Card.Title className="film-title">
      <h2>{movie.Title}</h2>
      </Card.Title>
      <div>
        <img
          width={300}
          height={445}
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <div className='container'>
      <p className="year">({movie.Year})</p>
      <button className="btn" onClick={() => openInNewTab(`https://www.imdb.com/title/${movie.imdbID}/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=E1XW6ZH799QJAQ7YCDR4&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1`)}>
       <img className='icon' src={ReactLogo} alt="logo" />
      </button>
      </div>
     
    </div>
    </Card>
  );
};


export default Movie;