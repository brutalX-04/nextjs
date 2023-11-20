"use client"

import Animlist from "@/components/AnimList"
import HeaderMenu from "@/components/Utillities/Header"
import Pagnition from "@/components/Utillities/pagnition"
import { useEffect, useState } from "react"
import { getResponseApi } from "../libs/libs-api"


const Page = () => {
    const [page, setpage] = useState(1)
    const [TopAnime, setTopAnime] = useState([])

    const fetchdata = async() => {
        const top = await getResponseApi("top/anime", `page=${page}`)
        setTopAnime(top)
    }

    useEffect(() => {
        fetchdata()
    },[page])

    return (
        <>
            <HeaderMenu title={`Populer Anime #${page}`}/>
            <Animlist api={TopAnime}/>
            <Pagnition page={page} lastPage={TopAnime.pagination?.last_visible_page} setpage={setpage}/>
        </>
    )
}

export default Page