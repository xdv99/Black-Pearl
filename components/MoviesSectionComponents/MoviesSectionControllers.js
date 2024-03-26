"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function MoviesSectionControllers({ seeMore = null }) {
  return (
    <div className="flex items-center space-x-2">
      <a href={seeMore} className="text-slate-400 hover:text-white">
        See more
      </a>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="block p-2 bg-white bg-opacity-20 rounded-md cursor-pointer text-black hover:bg-opacity-75"
        onClick={(e) => {
          const horitzontalContainer =
            e.target.parentElement.parentElement.nextElementSibling;
          if (horitzontalContainer !== null) {
            horitzontalContainer.scrollTo({
              left: horitzontalContainer.scrollLeft - 400,
              behavior: "smooth",
            });
          }
        }}
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="block p-2 bg-white bg-opacity-20 rounded-md cursor-pointer text-black hover:bg-opacity-75"
        onClick={(e) => {
          const horitzontalContainer =
            e.target.parentElement.parentElement.nextElementSibling;
          if (horitzontalContainer !== null) {
            horitzontalContainer.scrollTo({
              left: horitzontalContainer.scrollLeft + 400,
              behavior: "smooth",
            });
          }
        }}
      />
    </div>
  );
}

export default MoviesSectionControllers;
