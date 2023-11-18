import Animlist from "@/components/AnimList"
import Header from "@/components/AnimList/Header"


const Page = async ({ params }) => {
    const { keyword } = params
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASH_URL}/anime?q=${keyword}&limit=10`)
	const result = await response.json()
	try {
		return(
		  <>
			  <section>
				  <Header Title={`Result for ${keyword} ...`} LinkHref={"/"} TitleHref={" "} />
				  <Animlist api={result} />
			  </section>
		  </>
		)
	} catch (error) {
		return(
			<>
				<section>
					<Header Title={`Not result for ${keyword} ...`} LinkHref={"/"} TitleHref={" "} />
				</section>
			</>
		  )
	}
}

export default Page