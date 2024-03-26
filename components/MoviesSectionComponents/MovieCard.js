import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movie }) {
  return (
    <a href={`/movie/${movie.id}`}>
      <div className="inline-block w-48 group cursor-pointer bg-black shadow-sm hover:shadow-[#c0434b81] transition-transform duration-500 hover:scale-110">
        {/* Image & Overlay */}
        <div className="relative">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          />
          <div className="opacity-0 absolute flex justify-center items-center top-0 w-full h-full bg-gradient-to-t from-[#000000c4] to-[#0000003a] transition-opacity duration-300 group-hover:opacity-100">
            <FontAwesomeIcon
              className="text-[#C0434B] opacity-80 text"
              size="6x"
              icon={faCirclePlay}
            />
          </div>
          {/* Rating */}
          <div className="flex items-center absolute top-1 right-1">
            <FontAwesomeIcon
              className="text-[#C0434B]"
              size="xs"
              icon={faStarHalf}
            />
            <span className="text-xs text-white font-bold">
              {(6.944).toFixed(1)}
            </span>
          </div>
        </div>
        {/* Info */}
        <div className="flex justify-between p-2 gap-x-1 text-white">
          <div>
            <p className="font-fugaz text-sm whitespace-normal">
              {movie.original_title}
            </p>
            <p className="text-xs text-slate-300">{movie.release_date}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default MovieCard;
