import React from "react";
import { FiStar } from "react-icons/fi";

function Experience() {
  return (
    <div className='align-element w-full mt-8'>
      <h1 className='font-medium text-gray-600 text-lg md:text-3xl mb-4 text-center'>
        Experience
      </h1>
      <div className='w-[100%] flex flex-col text-center'>
        <h2 className='font-normal text-gray-900 text-md md:text-2xl leading-none mb-2'>
          GetServed PH Corp.
        </h2>
        <h3 className='font-normal text-gray-600 text-sm md:text-lg mb-4 text-center'>
          Sofware Developer
        </h3>
      </div>
      <div className='w-[100%] flex flex-col text-center'>
        <div className='flex flex-wrap justify-center items-center text-gray-600 gap-1'>
          <FiStar fill='#4b5563' size={12} />
          <span className='font-normal text-gray-900'>
            Develop and maintain a merchant portal web application for the
            company's business partners.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
