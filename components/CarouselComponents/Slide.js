function Slide({
  isVisible = false,
  imageUrl,
  movieName,
  movieOverview,
  link,
}) {
  return (
    <div
      className={`${
        isVisible ? "right-0" : "right-full "
      } slide absolute top-0 w-full h-full bg-cover transition-all duration-1000 md:bg-fixed`}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${imageUrl}')`,
      }}
    >
      <div className="overlay px-6 h-full bg-gradient-to-r from-[#000000b4] to-[#00000038]">
        <div className="container h-full mx-auto">
          <div className="w-2/3 h-full flex flex-col justify-center items-start space-y-2 text-white md:w-3/5 md:space-y-6 lg:w-1/4">
            <p className="text-3xl font-fugaz">{movieName}</p>
            <p className="text-xs text-pretty lg:text-sm">{movieOverview}</p>
            <a
              href={link}
              className="font-fugaz p-1 px-4 rounded-full bg-[#C0434B] hover:bg-black"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
