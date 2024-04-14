import MovieCarousel from "./src/components/movie-carousel";
import { getMostRatedMovies, getPopularMovies, getUpcomingMovies, getDiscoverMovies } from "./src/services/getMovies.service";
import SliderMovie from "./src/components/slider-movie";


export default async function Home() {
  const discoverMovies = await getDiscoverMovies();
  const upcomingMovies = await getUpcomingMovies();
  const mostRatedMovies = await getMostRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
      <main style={{height: '80vh'}}>
        <div>
        {/* <SliderMovie movies={upcomingMovies} title="Features movies"/> */}
        <SliderMovie/>
        </div>
        <div className="flex flex-col space-y-2 mt-0">
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
