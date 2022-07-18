import React from 'react';
import { useParams,Link } from 'react-router-dom';
import { useQuery } from "react-query";

const MovieDetails = () => {
    const {id} = useParams()
    const {data,isLoading,refetch} = useQuery("movie",()=> fetch("https://api.tvmaze.com/search/shows?q=all").then(res=>res.json()))
   
    
    const movie = data?.find(movie=> movie.show.id == id)
   console.log(movie);

    if(isLoading){
        return <h1>Loading...</h1>
    }
    // refetch()
    return (
        <div className='min-h-[80vh] w-full md:w-5/6 lg:w-5/6 mx-auto my-5 shadow-lg'>
            <div className='flex flex-col md:flex-row lg:flex-row gap-10 md:p-4 py-4'>
                <div className='flex  justify-center items-center'>
                    <img src={movie.show.image.original} className="rounded-lg h-screen" alt="" />
                </div>
                <div className='flex md:justify-center ml-10 md:ml-0 lg:ml-0 flex-1'>
                    <div>
                         
                    <h1 className='text-4xl'>{movie.show.name}</h1>
                    <h4 className='text-xl capitalize'>genres: {movie?.show?.genres?.map(item=>item+" | ")} </h4>
                    <h4 className='text-xl capitalize'>language: {movie?.show.language} </h4>
                    <h4 className='text-xl capitalize'>rating: {movie?.show.rating.average} </h4>
                    <h4 className='text-xl capitalize'>shedule: {movie?.show.schedule.time} | days: {movie?.show.schedule.days.map(day=>day)} </h4>
                    <h4 className='text-xl capitalize'>status: {movie?.show.status} </h4>
                    <h4 className='text-xl capitalize'>type: {movie?.show.type} </h4>
                    <h4 className='text-xl capitalize'>runtime: {movie?.show.runtime} </h4>
                    <h4 className='text-xl capitalize'>average Runtime: {movie?.show.averageRuntime} </h4>
                    <h4 className='text-xl capitalize'>ended data: {movie?.show.ended} </h4>
                    <h4 className='text-xl capitalize'>premiered data: {movie?.show.premiered} </h4>
                    {
                        movie?.show.officialSite && <a className='text-blue-500 text-xl' href={movie?.show.officialSite}>official Site </a>
                    
                    }
                    <br />
                    <Link to={`/booking/${movie.show.name}`} className='btn btn-info mt-5'>Click to booking </Link>
                    
                 <p className='mt-10'>
                 {movie?.show.summary}
                 </p>
                   
                    </div >
                </div>

            </div>
            
        </div>
    );
};

export default MovieDetails;