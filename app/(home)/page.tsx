import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: "Home",
    description: "Home Page",
}
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
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
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`} >{movie.title}</Link>
          {/* <Link href={`/movies/${movie.id}?title=${movie.title}`} >{movie.title}</Link> */}
        </li>
      ))}
    </div>
  );
}
