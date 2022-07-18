import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";


const Home = () => {
    const {data,isLoading,refetch} = useQuery("movie",()=> fetch("https://api.tvmaze.com/search/shows?q=all").then(res=>res.json()))
    if(isLoading){
        return <h1>Loading...before:</h1>
    }
  return (
    <div className="min-h-[100vh] w-full md:w-5/6 lg:w-5/6 mx-auto shadow-lg my-5 rounded-md">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5 p-3">
        {
            data.map((movie,index)=>   <MovieCard key={index} movie={movie} refetch={refetch} />)
        }
      

      </div>
    </div>
  );
};

export default Home;
