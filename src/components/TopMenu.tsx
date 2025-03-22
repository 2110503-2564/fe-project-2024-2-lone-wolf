import styles from './topmenu.module.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';
import TopMenuItem from './TopMenuItem';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu () {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'} className={styles.logoimg}
            alt='logo' width={0} height={0} sizes="100vh"/>
            <TopMenuItem title='Select Venue' pageRef='/venue'/>
            <TopMenuItem title='Booking' pageRef='/booking'/> 
            <TopMenuItem title='Reservation' pageRef='/reservations'/> 
            <TopMenuItem title='Cart' pageRef='/cart'/>
            {
                session?
                <Link href="api/auth/signout">
                    <div className='flex items-center absolute left-0 h-full px-2
                    text-cyan-600 text-sm'>
                        Sign-Out of {session.user?.name}
                    </div>
                </Link>
                :<Link href="api/auth/signin">
                    <div className='flex items-center absolute left-0 h-full px-2
                    text-cyan-600 text-sm'>
                        Sign-In
                    </div>
                </Link>
            }
        </div>
    );
}