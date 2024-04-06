import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

type Iprops = {
  movies: any,
  title: string
}


function MovieCarousel({ movies, title }: Iprops) {
  console.log(movies)
  return (
    <Carousel className="w-full max-w-2xl mx-auto"> {/* Set width and center */}
      {/* <CarouselTitle>{title}</CarouselTitle> Add title outside carousel */}
      <CarouselContent className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory">
        {movies.map((movie: any) => (
          <CarouselItem key={movie.id} className="snap-item w-full"> {/* Set width per item */}
            <div className="movie-item bg-gray-100 p-4 rounded shadow-md">
              <img src={movie.posterUrl} alt={movie.title} className="h-48 w-full object-cover rounded-t-md" />
              <h3>{movie.title}</h3>
              {/* Add other movie details as needed */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 ml-4 top-1/2 -translate-y-1/2 focus:outline-none"> {/* Style previous button */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6l6-6" />
        </svg>
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 mr-4 top-1/2 -translate-y-1/2 focus:outline-none"> {/* Style next button */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l6 6-6 6" />
        </svg>
      </CarouselNext>
    </Carousel>
  )
}

export default MovieCarousel