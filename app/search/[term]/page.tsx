import MovieCarousel from "@/app/src/components/movie-carousel";
import { searchMovie } from "@/app/src/services/getMovies.service";
import { notFound } from "next/navigation";

type IProps = {
  params: {
    term: string;
  };
};

export default async function SearchPag({ params: { term } }: IProps) {
  const data = await searchMovie(term);
  return (
    <div>
      <MovieCarousel movies={data} title="Result Search" isVertical />
    </div>
  );
}
