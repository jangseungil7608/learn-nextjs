import { API_URL } from "../app/(home)/page";

async function getMovie(id:string){
    //throw new Error("lol something went wrong");
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}