import Animlist from "@/components/AnimList"
import Header from "@/components/AnimList/Header"
import AnimlistYou from "@/components/AnimList/Recommend"


const Page = async () => {
	const top = await fetch(`${process.env.NEXT_PUBLIC_API_BASH_URL}/top/anime?limit=12`)
	const rec = await fetch(`${process.env.NEXT_PUBLIC_API_BASH_URL}/recommendations/anime?page=1`)
	const TopAnime = await top.json()
	const RecAnime = await rec.json()
  	return(
		<>
			<section>
				<Header Title={"Populer Anime"} LinkHref={"/populer"} TitleHref={"View all"} />
				<Animlist api={TopAnime} />
			</section>
			<section>
				<Header Title={"For You"} LinkHref={"/top"} TitleHref={"View all"} />
				<AnimlistYou api={RecAnime} />
			</section>
		</>
  	)
}

export default Page