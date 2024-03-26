import { fetchAndReturn } from "@/app/api_headers";
import MovieCard from "./MovieCard";
import MoviesSectionControllers from "./MoviesSectionControllers";

async function MoviesSection({
  sectionName,
  apiUri = null,
  children = null,
  seeMore = null,
}) {
  let movies = null;

  if (apiUri !== null) {
    movies = await fetchAndReturn(apiUri);
    movies = movies.results.slice(0, 15);
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
        <h2 className="text-xl text-white font-bold font-fugaz my-4">
          {sectionName}
        </h2>
        <MoviesSectionControllers seeMore={seeMore} />
      </div>
      <div className="whitespace-nowrap overflow-hidden space-x-4 py-4">
        {children === null
          ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          : children}
      </div>
    </div>
  );
}

export default MoviesSection;
