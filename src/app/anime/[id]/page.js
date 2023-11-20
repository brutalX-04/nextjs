import { getResponseApi } from "@/app/libs/libs-api"
import VideoPlayer from "@/components/Utillities/VideoPlayer"
import Image from "next/image"

const Page = async({ params: { id } }) => {
    const response = await getResponseApi(`anime/${id}`)

    return (
        <>
            <div className="flex justify-center items-center p-4">
                <h3>{response.data.title}</h3>
            </div>
            <div className="flex px-4 px-4 gap-2 overflow-x-auto">
                <div className="w-36 flex flex-col border rounded p-2 items-center">
                    <h3>Rank</h3>
                    <p>{response.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col border rounded p-2 items-center">
                    <h3>Score</h3>
                    <p>{response.data.score}</p>
                </div>
                <div className="w-36 flex flex-col border rounded p-2 items-center">
                    <h3>Episode</h3>
                    <p>{response.data.episodes}</p>
                </div>
                <div className="w-36 flex flex-col border rounded p-2 items-center">
                    <h3>Popularity</h3>
                    <p>{response.data.popularity}</p>
                </div>
                <div className="w-36 flex flex-col border rounded p-2 items-center">
                    <h3>Members</h3>
                    <p>{response.data.members}</p>
                </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap gap-2 p-4">
                <Image
                className="w-full rounded"
                src={response.data.images.webp.image_url}
                alt={response.data.images.jpg.image_url}
                width={250}
                height={250}
                />
                <p>{response.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer ytId={response.data.trailer.youtube_id}/>
            </div>
        </>
    )
}

export default Page