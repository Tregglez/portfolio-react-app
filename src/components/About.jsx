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

        <div className='w-full flex flex-col justify-center items-center text-center mt-10'>
          <div className="flex justify-center w-full border">
            <h3>
              Ruby
              <img src="assets/first-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
            </h3>

            <img src="assets/second-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
            <img src="assets/fourth-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
          </div>

          <div className="flex justify-center w-full">
            <img src="assets/fifth-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
            <img src="assets/sixth-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
            <img src="assets/first-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
          </div>

          <div className="flex justify-center w-full">
            <img src="assets/fourth-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
            <img src="assets/fifth-circle.png" alt="" className="w-40 h-14 mx-9 my-6" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
