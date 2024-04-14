import Link from "next/link";
import React from "react";

type IProps = {
  movie: any;
};
const MovieCard = ({ movie }: IProps) => {
  return (
    <Link href={`/watch/${movie?._id}`}>
      <div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover: drop-shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 to-gray-300 via-gray-900/10 z-10 dark:to-[1a1c29]" />
        <p className="absolute z-20 left-5 bottom-5 drop-shadow-2xl">
          {movie.title}
        </p>
        <img
          className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          alt={movie.original_title as any}
          src={movie.poster_path}
          key={movie.id}
          width={1920}
          height={1080}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
