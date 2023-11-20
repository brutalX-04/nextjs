"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useRef } from "react"


const Navbar = () => {
	const searchRef = useRef()
	const router = useRouter()
	
	const handlesearch = (event) => {
		const keyword = searchRef.current.value
		if (event.key === "Enter" || event.type === "click") {
			event.preventDefault()
			if (keyword.trim() == "") return
			router.push(`/search/${keyword}`)
		}
	}

	return(
			<header className="bg-color-accent">
				<div className="flex justify-between md:flex-row flex-col md:items-center p-3">
					<Link href="/" className="font-bold font-xl text-color-primary">Xmod-Anime</Link>
					<div className="relative">
						<input 
						placeholder="Search Anime ..."
						className="w-full rounded p-1"
						ref={searchRef}
						onKeyDown={handlesearch}
						/>
						<button className="absolute top-1.5 end-2" onClick={handlesearch}>
							<MagnifyingGlass size={20} />
						</button>
					</div>
				</div>
			</header>
		)
}

export default Navbar