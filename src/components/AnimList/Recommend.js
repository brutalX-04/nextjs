import Image from "next/image"
import Link from "next/link"

const AnimlistYou = ({api}) => {
    return(
        <div className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 px-4'>
            {api.data.map(data => {
                return (
                    <div key={data.entry[0].mal_id + Math.floor(Math.random() * 999999)} className='shadow-xl'>
                        <Link href={`/${data.entry[0].mal_id}`}>
                            <Image src={data.entry[0].images.webp.image_url} alt="..." width={350} height={350} className="w-full md:max-h-78 max-h-60 object-cover" />
                            <h5 className="px1 text-sm text-center py-2">{data.entry[0].title}</h5>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default AnimlistYou