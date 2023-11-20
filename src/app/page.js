import Animlist from "@/components/AnimList"
import Header from "@/components/AnimList/Header"
import AnimlistYou from "@/components/AnimList/Recommend"
import { getResponseApi } from "./libs/libs-api"


const Page = async () => {
	const TopAnime = await getResponseApi("top/anime", "limit=12")
	const RecAnime = await getResponseApi("recommendations/anime", "page=1")
  	return(
		<>
			<section>
				<Header Title={"Populer Anime"} LinkHref={"/populer"} TitleHref={"View all"} />
				<Animlist api={TopAnime} />
			</section>
			<section>
				<Header Title={"For You"} LinkHref={"/top"} TitleHref={""} />
				<AnimlistYou api={RecAnime} />
			</section>
		</>
  	)
}

export default Page