import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { cn } from '@/lib/utils'

type Iprops = {
  movies: any,
  title: string
}


function MovieCarousel({ movies, title }: Iprops) {
  return (
    <div className=''>
      <h2 className='text-xl font-bold px-10 py-2'>{title}</h2>
      <div className={cn('flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide')}>
        <Carousel>
        <CarouselContent>
          {
            movies?.data.map((movie: any) =>( 
              <div className='relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover: drop-shadow-lg'>
                  <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 to-gray-300 via-gray-900/10 z-10 dark:to-[1a1c29]' />
                <p className='absolute z-20 left-5 bottom-5 drop-shadow-2xl'>{movie.title}</p>
              <CarouselItem><img className='w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl
              rounded-sm' alt={movie.original_title as any} src={movie.poster_path}/></CarouselItem>
            </div>
          ))
          }
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      </div>
    </div>

  )
}

export default MovieCarousel