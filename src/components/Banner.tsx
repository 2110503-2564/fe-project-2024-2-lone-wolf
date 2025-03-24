/*'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()

    console.log(session?.user.token)

    return (
        <div className={styles.banner} onClick={()=>{setIndex(index + 1)}}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            objectFit='cover'
            />
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-medium'>Reserve Your Haven</h1>
                <h3 className='text-xl font-serif'>Where comfort meets elegance, and every sunrise whispers a promise of serenity</h3>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>
                Hello {session.user?.name}
                </div>:null
            }
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{e.stopPropagation(); router.push('/venue')}}>
                Choose Your Perfect Stay NOW
            </button>
        </div>
    );
}*/

'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data:session } = useSession()

    return (
        <div 
            className="relative w-full h-[500px] md:h-[600px] cursor-pointer overflow-hidden"
            onClick={() => setIndex(index + 1)}
        >
            {/* Background Image */}
            <Image 
                src={covers[index % 4]}
                alt="cover"
                fill
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Banner Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                <h1 className="text-5xl md:text-6xl font-semibold drop-shadow-lg">Reserve Your Haven</h1>
                <h3 className="text-lg md:text-2xl font-light mt-4 drop-shadow-md">
                    Where comfort meets elegance, and every sunrise whispers a promise of serenity
                </h3>
            </div>

            {/* Greeting (if logged in) */}
            {session && (
                <div className="absolute top-5 right-10 font-semibold text-cyan-200 text-lg md:text-xl">
                    Hello {session.user?.name}
                </div>
            )}

            {/* CTA Button */}
            <button
                className="absolute bottom-8 right-8 bg-white text-cyan-600 border border-cyan-600
                font-semibold py-3 px-6 rounded-lg shadow-lg transition-all
                hover:bg-cyan-600 hover:text-white hover:border-transparent"
                onClick={(e) => { e.stopPropagation(); router.push('/venue'); }}
            >
                Choose Your Perfect Stay NOW
            </button>
        </div>
    );
}
