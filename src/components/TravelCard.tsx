/*'use client'
import { useState } from "react"
import { VlogPlayer } from "./VlogPlayer"

export function TravelCard(){
    const [playing, setPlaying] = useState(true)
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200
        flex flex-row">
            <VlogPlayer isPlaying={playing} vdoSrc="/video/ThailandNatural.mp4"/>
            <div className="m-5">
                Thailand Natural
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                text-white shadow-sm" onClick={()=>{setPlaying(!playing)}}>
                    {playing? 'Pause':'Play'}
                </button>
            </div>
        </div>
    )
}*/

'use client'
import { useState } from "react"
import { VlogPlayer } from "./VlogPlayer"

export function TravelCard() {
    const [playing, setPlaying] = useState(true)

    return (
        <div className="w-[80%] mx-auto my-10 p-4 rounded-lg bg-white shadow-xl flex flex-row items-center gap-6">
            {/* Video Player */}
            <VlogPlayer isPlaying={playing} vdoSrc="/video/ThailandNatural.mp4"/>

            {/* Video Details */}
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800">Thailand Natural</h2>
                <button 
                    className="mt-3 rounded-md bg-sky-600 hover:bg-indigo-600 px-4 py-2 text-white 
                    font-medium shadow-md transition-all duration-300"
                    onClick={() => setPlaying(!playing)}
                >
                    {playing ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    )
}
