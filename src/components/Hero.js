import React from "react";
import MailIcon from "../icons/MailIcon";
import { FiMail } from "react-icons/fi";
import LinkedInIcon from "../icons/LinkedInIcon";
import GithubIcon from "../icons/GithubIcon";

function Hero() {
  return (
    <div className='align-element flex flex-col sm:justify-center sm:items-center text-center'>
      <div className='flex justify-center mb-16'>
        <img
          className='w-48 h-48 rounded-full'
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Image'
        />
      </div>

      <h6 className='font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8'>
        John Sarmiento
      </h6>

      <h1 className='font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8'>
        Software Developer
      </h1>

      <p className='font-normal text-gray-600 text-md md:text-xl mb-8'>
        I am a software developer with a focus on developing websites. I like
        the challenge of learning something new every day. A few of the
        technologies I am currently exploring include Django, NextJS,
        Typescript, React, and TailwindCSS.
      </p>

      <div className='w-full flex flex-wrap gap-8 justify-center'>
        <a
          href='mailto:john.sarmiento452@gmail.com'
          className='bg-gray-600 text-white px-2 py-2 font-medium md:font-semibold text-md rounded-md hover:bg-white hover:text-gray-700 transition ease-linear duration-500'
        >
          <MailIcon />
        </a>
        <a
          href='mailto:john.sarmiento452@gmail.com'
          className='bg-gray-600 text-white px-2 py-2 font-medium md:font-semibold text-md rounded-md hover:bg-white hover:text-gray-700 transition ease-linear duration-500'
        >
          <LinkedInIcon />
        </a>
        <a
          href='mailto:john.sarmiento452@gmail.com'
          className='bg-gray-600 text-white px-2 py-2 font-medium md:font-semibold text-md rounded-md hover:bg-white hover:text-gray-700 transition ease-linear duration-500'
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default Hero;
