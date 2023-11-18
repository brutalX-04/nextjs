import Image from "next/image"
import Link from "next/link"

const Animlist = ({api}) => {
    return(
        <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 px-4">
            {api.data.map(anime => {
                return (
                    <div key={anime.mal_id + Math.floor(Math.random() * 999999)} className='shadow-xl'>
                        <Link href={`/${anime.mal_id}`} className="shadow-xl cursor-pointer">
                        <Image 
                        src={anime.images.webp.image_url} 
                        alt="..." 
                        width={250} 
                        height={250} 
                        className="w-full md:max-h-44 max-h-60 object-cover"
                        />
                        <h4 className="px-1 text-sm text-center py-2">{anime.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Animlist