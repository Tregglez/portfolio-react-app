import React from "react";

const About = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className='px-5 py-6 font-bold text-2xl'>
        <span className='text-[#CD49C0]'>03</span> About
      </h1>

      {/* Description */}
      <div className='w-full flex flex-col justify-center items-center text-center'>
        <h2 className='font-bold mt-3 text-2xl pb-2'>Hi!</h2>
        <div className='flex justify-center items-center text-center w-full h-auto pt-8 text-base'>
          <p className="w-10/12 mx-auto">
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

        <div className='w-full flex flex-col justify-center items-center text-center mt-10'>
          <img src="assets/everything.png" alt="skills large screen" className="md:w-4/5 xl:w-3/5 hidden md:block" />
          <img src="assets/mobile.png" alt="skills mobile screen" className="sm:w-8/12 md:hidden w-10/12" />
        </div>
      </div>
    </div>
  );
};

export default About;
