import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({refetch,movie}) => {
    console.log(movie);
  return (
    <div className="  flex flex-col shadow-md">
      <div className="">
        <img
          src={movie.show.image.medium}
          className="w-full "
          alt=""
        />
        <div className="mt-[-30px] px-1 z-0 text-white">
           

          <div class="rating rating-sm">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              />
          </div>{" "}
          <span className="">5.6</span>
              
        </div>
      </div>
      <div className="mx-2 my-2">
        <Link to={`/details/${movie.show.id}`} className="text-xl font-semibold hover:text-blue-500">
          {movie.show.name}
        </Link>
        <p className="text-gray-700">{movie.show.premiered}</p>
      </div>
    </div>
  );
};

export default MovieCard;
