import { fetchAndReturn } from "@/app/api_headers";
import ActorCard from "@/components/MoviesSectionComponents/ActorCard";
import HanaMoviesContainer from "@/components/MoviesSectionComponents/HanaMoviesContainer";
import MoviesSection from "@/components/MoviesSectionComponents/MoviesSection";
import Navbar from "@/components/NavbarComponents/Navbar";

async function MovieDetails({ params }) {
  const movieId = params.id;

  if (isNaN(parseInt(movieId))) {
    let movies = await fetchAndReturn(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=1`
    );
    return (
      <div>
        <Navbar isAbsolute={false} />
        <HanaMoviesContainer items={movies.results} />
      </div>
    );
  } else {
    // Movie Details
    let movie = await fetchAndReturn(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    );

    // Movie Trailer
    let movieTrailer = await fetchAndReturn(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
    );
    movieTrailer = movieTrailer.results.filter((video) =>
      video.type === "Trailer" ? true : false
    );
    let trailerUrl =
      typeof movieTrailer[0] === "undefined"
        ? "rp8hvyjZWHs"
        : movieTrailer[0].key;

    // Cast
    let credits = await fetchAndReturn(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
    );
    credits = credits.cast.slice(0, 10);

    return (
      <div>
        <Navbar />
        {/* Movie Info */}
        <div className="lg:relative">
          {/* Image & Overlay */}
          <div
            className="w-full aspect-video bg-contain"
            style={{
              background: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
              backgroundSize: "contain",
              backgroundAttachment: "fixed",
            }}
          ></div>
          {/* Data */}
          <div className="p-2 px-4 space-y-4 text-white lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-5/12 lg:bg-black lg:bg-opacity-80 lg:py-4 lg:rounded-r-3xl">
            <p className="font-fugaz text-2xl">{movie.original_title}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {movie.genres.map((genre) => (
                <a
                  key={genre.id}
                  href={`/genre/${genre.id}`}
                  className="px-2 text-slate-500 hover:text-white"
                >
                  {genre.name}
                </a>
              ))}
            </div>
            <a
              className="block font-fugaz bg-[#C0434B] py-3 text-center w-full mx-auto rounded-full shadow-md"
              target="_blank"
              href={`https://www.youtube.com/watch?v=${trailerUrl}`}
            >
              Watch Trailer
            </a>
            <div>
              <h3 className="text-lg font-bold">Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>

        {/* Credit */}
        <MoviesSection sectionName="Cast Crew">
          {credits.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </MoviesSection>
        {/* Similiar Movies */}
        <MoviesSection
          apiUri={`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`}
          sectionName="Similiar Movies"
        />
      </div>
    );
  }
}

export default MovieDetails;
