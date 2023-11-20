import Link from "next/link"

const Header = ({Title,LinkHref,TitleHref}) => {
    return (
        <div className="flex justify-between p-4 items-center">
            <h1 className='font-bold'>{Title}</h1>
            <Link href={LinkHref} className="md:text-sm text-sm underline hover:text-color-accent transition-all">{TitleHref}</Link>
        </div>
    )
}

export default Header