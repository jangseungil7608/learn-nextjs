import { Metadata } from "next"
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"
import { API_URL } from "../../lib/constants";

export const metadata: Metadata = {
    title: "Home",
    description: "Home Page",
}
//export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
//const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getMovies() {
  // 5초 대기
  //await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
      ))}
    </div>
  );
}
