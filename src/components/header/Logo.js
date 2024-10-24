import Link from 'next/link';
import Image from 'next/image'
import profileImg from "@/public/profile-img.png"
const Logo = () => {
    return (
        <Link href="/" className='flex items-center text-dark'>
            <div className='w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light mr-2 md:mr-4'>
                <Image src ={profileImg} className='w-full h-auto rounded-full' alt='perfil'/>
            </div>
            <span className='font-extrabold text-lg pl-4 dark:font-semibold dark:text-white md:text-xl'>Universo Videoludico</span>
        </Link>
    );
};

export default Logo;