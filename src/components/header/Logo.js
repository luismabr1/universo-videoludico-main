import Link from 'next/link';
import Image from 'next/image'
import profileImg from "@/public/blogs/logo.png"
const Logo = () => {
    return (
        <Link href="/" className='flex items-center text-dark'>
            <div className='w-16 h-16 md:w-25 md:h-20  overflow-hidden mr-1 md:mr-4'>
                <Image 
                    src={profileImg} 
                    className='w-full h-full object-cover' 
                    alt='perfil' 
                    width={128} // ancho en px
                    height={128} // alto en px
                    priority
                />
            </div>
             <span className='font-extrabold text-lg dark:font-semibold dark:text-white md:text-xl'>Universo Videoludico</span>
        </Link>
    );
};

export default Logo;