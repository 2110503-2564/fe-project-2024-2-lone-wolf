import styles from './topmenu.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import TopMenuItem from './TopMenuItem';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu () {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg}
            alt='logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title='Select Hotel' pageRef='/venue'/>
            <TopMenuItem title='My Booking' pageRef='/cart'/>
            {
                session?
                (
                    <div className='flex flex-row absolute left-0 h-full'>
                        <Link href="/profile">
                        <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                            Profile</div>
                        </Link>
                        <Link href="/api/auth/signout">
                        <div className='flex items-center left-0 h-full px-2
                        text-cyan-600 text-sm'>
                            Sign-Out of {session.user?.name}
                        </div>
                        </Link>
                    </div>
                )
                : (
                    <div className='flex flex-row absolute left-0 h-full'>
                        <Link href="api/auth/signin">
                        <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                            Sign-In</div>
                        </Link>
                        <Link href="/api/auth/register">
                        <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                            Sign-Up</div>
                        </Link>
                    </div>
                    
                )
            }
        </div>
    );
}