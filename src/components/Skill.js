import React from "react";
import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CSSIcon";
import JSIcon from "../icons/JSIcon";
import ReactJSIcon from "../icons/ReactJSIcon";
import NextJSIcon from "../icons/NextJSIcon";
import PythonIcon from "../icons/PythonIcon";
import TSIcon from "../icons/TSIcon";
import TailwindIcon from "../icons/TailwindIcon";
import DjangoIcon from "../icons/DjangoIcon";
import MySQLIcon from "../icons/MySQLIcon";

function Skill() {
  return (
    <div className='align-element w-full mt-8'>
      <h1 className='font-medium text-gray-600 text-lg md:text-3xl mb-8 text-center'>
        Skills
      </h1>
      <div className='w-[100%] flex flex-wrap justify-center gap-7'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/HTML'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <HTMLIcon />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <CSSIcon />
        </a>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <JSIcon />
        </a>
        <a
          href='https://www.python.org/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <PythonIcon />
        </a>
        <a
          href='https://react.dev/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <ReactJSIcon />
        </a>
        <a
          href='https://nextjs.org/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <NextJSIcon />
        </a>
        <a
          href='https://www.typescriptlang.org/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <TSIcon />
        </a>
        <a
          href='https://tailwindcss.com/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <TailwindIcon />
        </a>
        <a
          href='https://www.djangoproject.com/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <DjangoIcon />
        </a>
        <a
          href='https://www.mysql.com/'
          rel='noreferrer'
          target='_blank'
          className='bg-gray-50 rounded-md px-8 py-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'
        >
          <MySQLIcon />
        </a>
      </div>
    </div>
  );
}

export default Skill;
