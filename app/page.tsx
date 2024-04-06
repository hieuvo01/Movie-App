import Image from "next/image";
import { Button } from "@/components/ui/button"
import MovieCarousel from "./src/components/movie-carousel";
import { getMostRatedMovies, getPopularMovies, getUpcomingMovies } from "./src/services/getMovies.service";


export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const mostRatedMovies = await getMostRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
      <main style={{height: '80vh'}}>
        <div>Slider</div>
        <div className="flex flex-col space-y-2 xl:-mt-48">
          {/* Phim sắp ra mắt  */}
          <MovieCarousel movies={upcomingMovies} title="Up coming movies" />
          {/* Phim nổi bật */}
          <MovieCarousel movies={mostRatedMovies} title="Most rated movies" />
          {/* Phim chiếu rạp */}
          <MovieCarousel movies={popularMovies} title="Popular movies" /> 
        </div>
      </main>
  )
}
