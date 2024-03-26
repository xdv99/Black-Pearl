import ActorCard from "./ActorCard";
import MovieCard from "./MovieCard";

function HanaMoviesContainer({ title, items, isActor = false }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="container mx-auto flex justify-center flex-wrap px-4 gap-x-2 gap-y-4 mt-8 md:px-0">
        {items.map((item) =>
          isActor ? (
            <ActorCard key={item.id} actor={item} />
          ) : (
            <MovieCard key={item.id} movie={item} />
          )
        )}
      </div>
    </div>
  );
}

export default HanaMoviesContainer;
