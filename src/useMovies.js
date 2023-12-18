import { useState, useEffect } from "react";
const KEY = "ae7fd9c6"; //!Api key

//Custom hook
export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  useEffect(
    function () {
    // callBack?.();//!You can also use optional chainning for calling a function
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setErrMessage("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching data");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not Found");

          setMovies(data.Search);
          setErrMessage("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setErrMessage(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setErrMessage("");
        setMovies([]);
        return;
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return {movies, errMessage, isLoading};
}
