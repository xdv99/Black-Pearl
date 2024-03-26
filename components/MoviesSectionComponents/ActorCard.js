function ActorCard({ actor }) {
  return (
    <div className="inline-block w-44 space-y-1 relative cursor-pointer">
      <img
        className="w-full rounded-sm"
        src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
      />
      <p className="text-white w-full bg-black bg-opacity-70 text-sm text-center absolute bottom-0">
        {actor.name}
      </p>
    </div>
  );
}

export default ActorCard;
