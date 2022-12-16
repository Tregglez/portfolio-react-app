import React from 'react'

const Projects = () => {
  return (
    <div className='h-screen dark:bg-black'>
      <h1 className='px-5 py-6 font-bold text-2xl dark:text-white'>
        <span className='text-[#CD49C0] dark:text-[#58C55C]'>02</span> Projects
      </h1>

      <div className='w-full flex justify-center place-items-start h-screen lg:h-5/6 lg:items-center'>
        <div className='flex flex-col lg:flex-row lg:justify-center w-full md:mx-32'>
          {/* Project Links */}
          <div className='justify-center md:text-center px-7'>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 01 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 02 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 03 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 04 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 05 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 06 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 07 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='my-3 md:my-6 light:border-b-2 dark:text-white font-extralight'><span className='font-bold'>Project 08 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
          </div>

          {/* Images */}
            <img src="assets/placeholder.avif" alt="" className='p-5 object-scale-down object-center lg:w-1/2' />
        </div>
      </div>
    </div>
  )
}

export default Projects
