import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
   <section >
    <article className='flex flex-col gap-4 justify-center items-center py-28'>
      <h1 className='text-2xl font-medium'>Assigment Links</h1>
      <nav className='flex flex-col gap-11 py-11 '>
        <Link className='bg-sky-600 text-white py-2 px-4' href={"/Formproject"}> Formproject {"->"}</Link>
     
        <Link className='bg-sky-600 text-white py-2 px-4' href={"/Apiproject"}> Apiproject &nbsp; {"->"}</Link>
      </nav>
    </article>
   </section>
  )
}

export default page
