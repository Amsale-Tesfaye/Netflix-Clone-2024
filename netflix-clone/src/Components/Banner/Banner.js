import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios";
import requests from '../../utils/requests'
import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() =>{
        (async () => {
            try {
              const request = await axios.get(requests.fetchNetflixOriginals);
              console.log(request)
              setMovie(request.data.results[
                  Math.floor(Math.random() * request.data.results.length)
                ] );
            } 
            catch (error) {
              console.log("error", error);
            }
         })()   
    },[]);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + '...': str;
    }
  return (
    <div
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="Banner__contents">
        <h1 className="Banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner__buttons">
          <button className="Banner__button play">Play</button>
            <button className="Banner__button ">My List </button> 
        </div>
        <h1 className="Banner__description">
          {" "}
          {truncate(movie?.overview, 150)}{" "}
        </h1>
      </div>
      <div className="Banner__fadeBottom" />
    </div>
  );
}

export default Banner