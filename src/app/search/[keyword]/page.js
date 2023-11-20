import { getResponseApi } from "@/app/libs/libs-api"
import Animlist from "@/components/AnimList"
import Header from "@/components/AnimList/Header"


const Page = async ({ params }) => {
    const { keyword } = params
	const decodeKeyword = decodeURI(keyword)
	const result = await getResponseApi("anime", `${keyword}`)

	if (result.pagination.items.count === 0) {
		return (
			<Header Title={`No result for ${decodeKeyword} ...`} LinkHref={"/"} TitleHref={"Back to home"} />
		)
	}

	return(
		<>
			<section>
				<Header Title={`Result for ${decodeKeyword} ...`} LinkHref={"/"} TitleHref={" "} />
				<Animlist api={result} />
			</section>
		</>
	)
}

export default Page