import Link from 'next/link';
import Image from 'next/image'
import profileImg from "../../../../public/profile-img.png"
const Logo = () => {
    return (
        <Link href="/" className='flex items-center text-dark'>
            <div className='w-16  rounded-full overflow-hidden border border-solid border-dark'>
                <Image src ={profileImg} className='w-full h-auto rounded-full' alt='perfil'/>
            </div>
            <span className='font-extrabold text-xl pl-4'>Universo Videoludico</span>
        </Link>
    );
};

export default Logo;