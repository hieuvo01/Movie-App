'use client'
import React from "react";
import AutoPlay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";


type IProps = {
  movies: any;
};

AutoPlay.globalOptions = { delay: 8000 };

const SliderBanner = ({ movies }: IProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    AutoPlay(),
  ]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden lg:-mt-40 relative cursor-pointer h-[900px]"
    >
      <div className="flex">
        {movies?.data?.map((movie: any) => (
          <div className="flex-full min-w-0 relative" key={movie.id}>
            <img
              alt={movie.original_title}
              src={movie.poster_path}
              key={movie.id}
              width={1920}
              height={1080}
              className="object-cover"
            />

						<div className="hidden lg:inline absolute mt-0 top-0 z-20 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent h-full w-full bg-gradient-to-r via-transparent to-transparent from-gray-900/90">
							<h2 className="text-5xl font-bold max-w-xl z-50">{movie.title}</h2>
							<p className="max-w-xl line-clamp-3">{movie.overview}</p>
						</div>
          </div>
        ))}
      </div>
			<div className="absolute insert-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]" />
    </div>
  );
};

export default SliderBanner;