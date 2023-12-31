import Image from "next/image"
import Link from "next/link"

const Animlist = ({api}) => {
    return(
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link key={index} href={`/anime/${anime.mal_id}`} className="flex flex-col justify-between rounded shadow-xl cursor-pointer">
                    <Image 
                    src={anime.images.webp.image_url} 
                    alt="..." 
                    width={250} 
                    height={250} 
                    className="w-full md:max-h-44 sm:max-h-32 max-h-60 object-cover rounded"
                    />
                    <div className="w-full h-full">
                        <h4 className="px-1 text-sm py-2 text-center">{anime.title}</h4>
                    </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Animlist