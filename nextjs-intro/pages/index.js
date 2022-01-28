import { useState, useEffect } from "react";
import Seo from "../components/Seo";

const API_KEY = "727117319f1f914f942dd8a8ea925bf9";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="home" />
      {!movies && <h4>Loading....</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <h1 className="active">Hello World!</h1>
    </div>
  );
}
