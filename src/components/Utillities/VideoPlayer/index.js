"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ ytId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const option = {
        width: "300",
        height: "200"
    }

    const handleVideoPlayyer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Player = () => {
        return (
            <div className="fixed bottom-1 right-1">
            <button onClick={handleVideoPlayyer} className="rounded bg-color-primary px-2 float-right mb-1 hover:bg-color-accent transition-all">X</button>
                <YouTube
                    videoId={ytId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        )
    }

    return isOpen ? <Player /> : 
    <button onClick={handleVideoPlayyer} className="fixed rounded right-5 bottom-5 bg-color-primary p-1 hover:bg-color-accent transition-all">
        Play trailer
    </button>
    
}

export default VideoPlayer