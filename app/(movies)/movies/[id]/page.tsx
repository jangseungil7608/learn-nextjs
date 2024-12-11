import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { getMovie } from "../../../../components/movie-info";
import { Metadata } from "next";

type IParams = Promise<{
    id: string;
}>

export async function generateMetadata(props: {params: IParams}) {
    const params = await props.params;
    const movie = await getMovie(params.id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetail(props: { params: IParams }) {
    //const movie = await getMovie(id);
    //const videos = await getVideos(id);
    // 두 개의 비동기 함수를 동시에 실행하고 결과를 배열로 반환
    //const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    //return <h1>{movie.title}</h1>
    const params = await props.params;
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}> 
            <MovieInfo id={params.id} />   
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={params.id} />
        </Suspense>
    </div>
}