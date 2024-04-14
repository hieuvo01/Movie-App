import MovieCarousel from "@/app/src/components/movie-carousel";
import { getDiscoverMovies } from "@/app/src/services/getMovies.service";
import { notFound } from "next/navigation"

type IProps= {
    params: {
        id: string
    };
}


export default async function GeneratePage({params: {id}} :IProps)
{
    if(!id) return notFound;
    const data = await getDiscoverMovies(id);
    return (
      <div>
        <MovieCarousel movies={data} title="" isVertical />
      </div>
    );
}
  