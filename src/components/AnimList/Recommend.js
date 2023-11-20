import Image from "next/image"
import Link from "next/link"

const AnimlistYou = ({api}) => {
    return(
        <div className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 px-4'>
            {api.data?.map((data, index) => {
                return (
                    <Link key={index} href={`/anime/${data.entry[0].mal_id}`}className="flex flex-col justify-between rounded shadow-xl cursor-pointer">
                        <Image src={data.entry[0].images.webp.image_url} alt="..." width={350} height={350} className="w-full md:max-h-44 sm:max-h-32 max-h-60 object-cover rounded" />
                        <div className="w-full h-full">
                            <h4 className="px-1 text-sm py-2 text-center">{data.entry[0].title}</h4>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimlistYou