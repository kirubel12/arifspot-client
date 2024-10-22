"use client"
import React, { useState } from 'react'
import {SiTailwindcss, SiLaravel, SiShadcnui} from 'react-icons/si'
import { RiNextjsLine } from "react-icons/ri";

import { Check, Copy } from 'lucide-react';

interface CopyableCodeTabProps {
    code: string;
    language?: string;
  }

const SectionDetails = ( {code , language}: CopyableCodeTabProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(code);
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      };

  return (

<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Next.js + Laravel</h2>

        <p className="mt-4 text-gray-600">
          A next.js boilerplate for your project if you use laravel as backend and next.js as frontend
        </p>

        {/* <Button  className='mt-6' asChild>
            <Link href="https://github.com/kirubel12/laravel-nextjs-boilerplate">
            <FaGithub />
            Github Repo
            </Link>
        </Button> */}
        <div className="bg-gray-900 rounded-lg overflow-hidden w-[580px] shadow-lg mt-4">
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
        <span className="text-sm font-mono text-gray-400">Terminal</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-white focus:outline-none transition-colors duration-200"
          aria-label="Copy to clipboard"
        >
          {isCopied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="p-4">
        <pre className="flex">
          <span className="text-green-500 mr-2">$</span>
          <code className="text-sm font-mono text-gray-300">gh repo clone kirubel12/laravel-nextjs-boilerplate <span className='text-primary'>YOUR_FOLDER</span></code>
        </pre>

      </div>
    </div>
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
