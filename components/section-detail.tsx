import React from 'react'
import { Button } from './ui/button'
import {SiTailwindcss, SiLaravel, SiShadcnui} from 'react-icons/si'
import { RiNextjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import Link from 'next/link';

const SectionDetails = () => {
  return (

<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Next.js + Laravel</h2>

        <p className="mt-4 text-gray-600">
          A next.js boilerplace for your project if you use laravel as backend and next.js as frontend
        </p>

        <Button  className='mt-6' asChild>
            <Link href="https://github.com/kirubel12/laravel-nextjs-boilerplate">
            <FaGithub />
            Github Repo
            </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 ">
        <div
          className=" w-[300px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring mr-10"

        >
          <span className="inline-block rounded-lg bg-primary p-3">
            <RiNextjsLine className='text-white' />
          </span>

          <h2 className="mt-2 font-bold">Next.js</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">

          React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

          </p>
        </div>
        <div
          className=" w-[300px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

        >
          <span className="inline-block rounded-lg bg-primary p-3">
            <SiLaravel className='text-white' />
          </span>

          <h2 className="mt-2 font-bold">Laravel</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">

          Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.

          </p>
        </div>
        <div
          className=" w-[300px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

        >
          <span className="inline-block rounded-lg bg-primary p-3">
            <SiTailwindcss className='text-white' />
          </span>

          <h2 className="mt-2 font-bold">Tailwindcss</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">

            Tailwind CSS is a utility-first CSS framework that helps you build
            beautiful, responsive designs without any extra configuration.

          </p>
        </div>
        <div
          className=" w-[300px] rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"

        >
          <span className="inline-block rounded-lg bg-primary p-3">
            <SiShadcnui className='text-white' />
          </span>

          <h2 className="mt-2 font-bold">Shadcn</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">

          NOT a component library. It&apos;s a collection of re-usable components that you can copy and paste into your apps.

          </p>
        </div>




      </div>
    </div>
  </div>
</section>
  )
}

export default SectionDetails
