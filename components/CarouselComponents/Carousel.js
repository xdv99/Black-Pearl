import { fetchAndReturn } from "@/app/api_headers";
import SliderContainer from "./SlidesContainer";

let trendingMovies = await fetchAndReturn(
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
);

function Carousel() {
  return <SliderContainer trendingMovies={trendingMovies.results} />;
}

export default Carousel;
