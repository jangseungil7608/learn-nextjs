import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css"

async function getVideos(id:string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <div className={styles.container}>
        {videos.map(video => (
            <iframe 
                key={video.id} 
                src={`https://www.youtube.com/embed/${video.key}`} 
                title={video.name} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        ))}
    </div>
}