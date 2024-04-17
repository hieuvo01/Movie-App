'use client';

import React, { useEffect, useState } from 'react'
import { detailMovie } from '../../src/services/getMovies.service';
import MovieCarousel from '@/app/src/components/movie-carousel';
import { useParams } from 'next/navigation';

const Watch = () => {
  const {id} = useParams();
  const [data, setData] = useState<any>();
  const handleLoad = async () =>{
    const data = await detailMovie(id.toString());
    setData(data);
  }
  useEffect(()=>{
    handleLoad();
  },[])
  console.log(data);
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen mt-20 ml-16">
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <div className="space-y-4">
              <iframe width="840" height="560"
                src={data?.data.backdrop_path}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
              </iframe>
            <div className="aspect-w-16 aspect-h-9 bg-gray-800" />
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Movie Name:</h2>
              <h1 className="text-xl font-bold text-orange-600">{data?.data.title}</h1>
              <button className="text-sm bg-red-600 hover:bg-red-800 text-white font-bold py-1 px-2 rounded">
                Report Error
              </button>
            </div>
            <h5 className="text-sm">Vote: {data?.data.vote_average}</h5>
            <div>
              <p className="text-gray-400">Choose Server:</p>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
                  Server 1
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
                  Server 2
                </button>
              </div>
            </div>
            <div>
              <p className="text-gray-400">Description</p>
              <p className="text-sm text-gray-300">
                  {data?.data.overview}           
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">Prev</button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">Next</button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-lg font-bold">Year Released</h2>
              <div className="flex flex-col space-y-1">
                <a className="text-gray-400 hover:text-white" href="#">
                  {data?.data.release_date}
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-bold">Actors</h2>
              <div className="flex flex-col space-y-1">
                <a className="text-gray-400 hover:text-white" href="#">
                  Tom Hanks
                </a>
                <a className="text-gray-400 hover:text-white" href="#">
                  Robert Downey Jr.
                </a>
                <a className="text-gray-400 hover:text-white" href="#">
                  Tom Cruise
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="bg-[#1a1a1a] p-4 mt-4">
      <div className="container mx-auto text-center text-sm text-gray-400">© 2024 iMovies.net</div>
    </footer>
  </div>
  )
}
// </div>

export default Watch

