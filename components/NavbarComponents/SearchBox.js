"use client";

import { tmdbApiHeaders } from "@/app/api_headers";
import { useState } from "react";

function SearchBox({ isSideMenu = false }) {
  const [results, setResults] = useState([]);

  function fetchResults(input) {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=1`,
      tmdbApiHeaders
    )
      .then((res) => res.json())
      .then((res) =>
        setResults(
          res.results.sort((a, b) => b.popularity - a.popularity).slice(0, 5)
        )
      );
  }

  return (
    <div
      className={`${
        isSideMenu ? "block relative" : "hidden"
      } md:block md:relative md:w-1/2 lg:w-full`}
    >
      {/* Search Result */}
      <div
        id="test"
        className={
          results.length == 0
            ? "hidden"
            : "absolute bg-gray-900 text-white top-full -mt-1 py-2 px-2 w-full space-y-4 shadow-md z-20"
        }
      >
        {results.map((movie) => (
          <a href={`/movie/${movie.id}`}>
            <div
              key={movie.id}
              className="flex max-w-full cursor-pointer hover:bg-gray-800"
            >
              <img
                className="w-14 mr-2"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <div className="mt-2">
                <p className="text-sm font-semibold font-sans overflow-ellipsis">
                  {movie.original_title}
                </p>
                <p className="text-xs text-slate-400">{movie.release_date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <input
        className="p-2 rounded-lg text-black w-full"
        placeholder="Search"
        onChange={(e) => fetchResults(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchBox;
