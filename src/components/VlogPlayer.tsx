'use client'
import { useEffect, useRef, useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export function VlogPlayer({vdoSrc, isPlaying}: {vdoSrc:string, isPlaying:boolean}) {
    
    const vdoRef = useRef<HTMLVideoElement>(null)

    //useWindowListener()

    useEffect(()=>{  
        //alert('width is ' + vdoRef.current?.videoWidth)
        if(isPlaying){
            vdoRef.current?.play()
        }
        else{
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    return(
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef}
        muted loop controls/>
    )
}