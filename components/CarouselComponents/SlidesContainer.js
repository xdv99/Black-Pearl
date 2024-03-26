"use client";

import { useState } from "react";
import { useRef, useEffect } from "react";
import Slide from "./Slide";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

function SliderContainer({ trendingMovies }) {
  const [index, setIndex] = useState(0);
  const slides = [];
  const buttons = [];

  function changeSlide(value = null) {
    if (value !== null) {
      setIndex(value);
      return;
    }
    if (index < trendingMovies.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  for (let i = 0; i < trendingMovies.length; i++) {
    const movie = trendingMovies[i];
    slides.push(
      <Slide
        isVisible={i == index}
        key={movie.id}
        imageUrl={movie.backdrop_path}
        movieName={movie.original_title}
        movieOverview={movie.overview}
        link={`movie/${movie.id}`}
      />
    );
    buttons.push(
      <a
        key={`button-${movie.id}`}
        href=""
        onClick={(e) => {
          e.preventDefault();
          changeSlide(i);
        }}
        className={`p-2 ${
          index == i ? "bg-[#C0434B]" : "bg-[#d4d4d840]"
        } rounded-full`}
      ></a>
    );
  }

  useInterval(changeSlide, 5000);

  return (
    <div id="carousel" className="min-h-96 relative lg:h-[36rem]">
      {slides}
      <div
        id="controls"
        className="flex absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2"
      >
        {buttons}
      </div>
    </div>
  );
}

export default SliderContainer;
