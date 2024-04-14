import React from 'react'
import { cn } from "@/lib/utils";
import MovieCard from "./movie-card";

type Iprops = {
  movies: any;
  title: string;
  isVertical?: boolean;
};

function MovieCarousel({ movies, title, isVertical }: Iprops) {
  return (
    <div className="">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide",
          isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {isVertical
          ? movies?.data.map((movie: any) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-x-5 space-y-5 mb-5 items-center lg:flex-row"
                )}
              >
                <MovieCard key={movie.id} movie={movie} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p>{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.data.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </div>
    </div>

  )
}

export default MovieCarousel;