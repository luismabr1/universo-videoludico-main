import LottieAnimation from '@/src/components/Contact/LottieAnimation'
import React from 'react'
import ContactForm from './ContactForm'
import siteMetadata from '../../utils/siteMetaData';



export const metadata = {
  title: "Contact me",
  description: `Contactme through the form available on this page or form or mail at ${siteMetadata.email}`,
};

const Contact = () => {
  return (
    <section className='w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark'>
      <div className='inline-block w-2/5 h/full border-r-2 border-solid border-dark'><LottieAnimation/></div>
      <div className='w-3/5 flex flex-col items-start justify-center px-16 pb-8'>
            <h2 className='font-bold capitalize text-4xl'>Lets connect!</h2>
            <ContactForm />
      </div>
    </section>
  )
}

export default Contact
