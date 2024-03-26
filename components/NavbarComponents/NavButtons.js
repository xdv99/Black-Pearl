import NavItem from "./NavItem";
import { useEffect, useState } from "react";
import { tmdbApiHeaders } from "@/app/api_headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function NavButtons({ isSideMenu = false }) {
  const [genres, setGenres] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      tmdbApiHeaders
    )
      .then((res) => res.json())
      .then((res) => setGenres(res["genres"]));
  });

  return (
    <ul
      className={`${
        isSideMenu ? "block" : "hidden"
      } md:flex md:space-x-6 text-white font-fugaz`}
    >
      <div className="group relative block p-2 cursor-pointer hover:text-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]">
        Genres <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
        <div className="hidden grid-cols-2 absolute top-full w-full h-48 p-4 overflow-y-scroll gap-y-4 z-30 bg-neutral-800 bg-opacity-75 md:grid-cols-3 md:w-[30rem] md:h-auto md:overflow-y-auto group-hover:grid">
          {typeof genres === "object" ? (
            genres.map((genre) => {
              return (
                <a
                  key={genre.id}
                  href={`/genre/${genre.id}`}
                  className="text-white pl-2 hover:border-l-2 hover:border-[#C0434B] hover:text-[#C0434B]"
                >
                  {genre.name}
                </a>
              );
            })
          ) : (
            <p>Waiting...</p>
          )}
        </div>
      </div>

      <div className="group relative block p-2 cursor-pointer hover:text-[#C0434B] hover:border-b-2 hover:border-b-[#C0434B]">
        Movies <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
        <div className="hidden grid-cols-1 absolute top-full h-48 p-4 overflow-y-scroll gap-y-4 z-30 bg-neutral-800 bg-opacity-75 md:w-[30rem] md:h-auto md:overflow-y-auto group-hover:grid">
          <a
            href="/movie/top_rated"
            className="text-white pl-2 hover:border-l-2 hover:border-[#C0434B] hover:text-[#C0434B]"
          >
            Top Rated
          </a>
          <a
            href="/movie/popular"
            className="text-white pl-2 hover:border-l-2 hover:border-[#C0434B] hover:text-[#C0434B]"
          >
            Popular
          </a>
          <a
            href="/movie/now_playing"
            className="text-white pl-2 hover:border-l-2 hover:border-[#C0434B] hover:text-[#C0434B]"
          >
            Now Playing
          </a>
          <a
            href="/movie/upcoming"
            className="text-white pl-2 hover:border-l-2 hover:border-[#C0434B] hover:text-[#C0434B]"
          >
            Upcoming
          </a>
        </div>
      </div>

      <NavItem title="Actors" link="/actors" />
    </ul>
  );
}

export default NavButtons;
