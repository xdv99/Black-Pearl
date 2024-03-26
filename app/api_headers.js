const tmdbApiHeaders = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWZlZTdlN2UzNWJlNTZkYWYzMWZkYTI5OTVlNGNkMCIsInN1YiI6IjY1ZmM2MmU1MGMxMjU1MDE3ZTBiMTNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uoGEHTHIFQcql56-cuAzGxq2jNBwykofq7IsUk9ujOA",
  },
};

async function fetchAndReturn(uri) {
  let result = await fetch(uri, tmdbApiHeaders);
  result = await result.json();
  return result;
}

export { tmdbApiHeaders, fetchAndReturn };
