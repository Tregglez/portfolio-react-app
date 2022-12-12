import React from 'react'

const Projects = () => {
  return (
    <div>
      <h1 className='px-5 py-6 font-bold text-2xl'>
        <span className='text-[#CD49C0]'>02</span> Projects
      </h1>

      <div className='w-full flex justify-center items-center h-screen'>
        <div className='flex justify-center w-full mx-32'>
          {/* Project Links */}
          <div className='justify-center p-7'>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 01 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 02 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 03 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 04 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 05 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 06 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 07 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
            <p className='underline underline-offset-8 my-4'><span className='font-bold'>Project 08 /</span> Lorum ipsum is sijmply dummy text of the printing</p>
          </div>
          <div className='flex items-center'>
            <img src="assets/placeholder.avif" alt="" className='p-7 object-scale-down object-center h-96 w-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
