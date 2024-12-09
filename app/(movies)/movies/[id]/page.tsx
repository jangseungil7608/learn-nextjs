import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {
    //const movie = await getMovie(id);
    //const videos = await getVideos(id);
    // 두 개의 비동기 함수를 동시에 실행하고 결과를 배열로 반환
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    //return <h1>{movie.title}</h1>
    return <div>
        <h1>Movie Detail</h1>
        <Suspense fallback={<h1>Loading movie info</h1>}> 
            <MovieInfo id={id} />   
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}