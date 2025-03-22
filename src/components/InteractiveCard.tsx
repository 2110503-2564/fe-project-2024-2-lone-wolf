'use client'
import React from 'react';
import styles from './card.module.css'
import Image from 'next/image';

export default function InteractiveCard({ children, contentName } : {children: React.ReactNode, contentName: String}) {

    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove('shadow-lg')
            event.currentTarget.classList.add('shadow-2xl')
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl')
            event.currentTarget.classList.add('shadow-lg')
        }
    }

    return (
        <div className='w-full h-[300px] rounded-lg shadow-lg bg-neutral-200 bg-white hover:bg-neutral-200' 
         onMouseOver={(e)=>onCardMouseAction(e)}
         onMouseOut={(e)=>onCardMouseAction(e)}>
            {children}
        </div>
        
    );
}
