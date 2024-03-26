import Carousel from "@/components/CarouselComponents/Carousel";
import Footer from "@/components/FooterComponents/Footer";
import MoviesSection from "@/components/MoviesSectionComponents/MoviesSection";
import Navbar from "@/components/NavbarComponents/Navbar";
import { fetchAndReturn } from "./api_headers";
import HanaMoviesContainer from "@/components/MoviesSectionComponents/HanaMoviesContainer";
import ActorCard from "@/components/MoviesSectionComponents/ActorCard";

async function App() {
  let latestMovies = await fetchAndReturn(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  let actors = await fetchAndReturn(
    "https://api.themoviedb.org/3/trending/person/week?language=en-US"
  );

  return (
    <div>
      <Navbar />
      <Carousel />
      <MoviesSection
        sectionName="Top Rated"
        apiUri="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        seeMore="/movie/top_rated"
      />
      <MoviesSection
        sectionName="Upcoming"
        apiUri="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        seeMore="/movie/upcoming"
      />
      <MoviesSection
        sectionName="Popular"
        apiUri="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        seeMore="/movie/popular"
      />
      <HanaMoviesContainer items={latestMovies.results} />
      <MoviesSection sectionName="Popular Actors" seeMore="/actors">
        {actors.results.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </MoviesSection>
      <Footer />
    </div>
  );
}

export default App;
