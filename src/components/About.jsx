import React from "react";

const About = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='px-5 py-6 font-bold text-2xl'>
        <span className='text-[#CD49C0]'>03</span> About
      </h1>

      <div className='w-full flex flex-col justify-center items-center text-center'>
        <h2 className='font-bold mt-3 text-2xl pb-2'>Hi!</h2>
        <div className='flex justify-center items-center text-center w-6/12 h-auto pt-8 text-base'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            neque obcaecati amet reiciendis! Excepturi reprehenderit dolorum
            ducimus? Obcaecati culpa voluptate ipsum voluptates perspiciatis eos
            voluptatem quas natus molestiae, iste veniam! Enim debitis nobis
            quis nostrum, animi quod eligendi modi. Quibusdam illum quo vero
            fugiat voluptate hic tenetur explicabo nam provident, necessitatibus
            temporibus! Doloremque architecto optio tenetur minima possimus
            veniam ullam.
          </p>
        </div>

        <div className='w-full flex flex-col justify-center items-center text-center'>
          <h2 className='font-bold text-2xl mt-24'>Interests</h2>

          <div className='flex justify-around items-center border-solid border-2 border-red-500 w-4/12 py-8'>
            <p className='font-bold border-solid border-2 border-black rounded-full px-10'>
              ES6 Javascript
            </p>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              HTML + CSS
            </p>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              React.js
            </p>
          </div>

          <div className='flex justify-around items-center border-solid border-2 border-red-500 w-4/12 py-8'>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              SQL
            </p>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              Heroku
            </p>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              Github
            </p>
          </div>

          <div className='flex justify-around items-center border-solid border-2 border-red-500 w-4/12 py-8'>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              Ruby on Rails
            </p>
            <p className='font-bold border-solid border-2 border-black rounded-full p-6'>
              Active Record
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
