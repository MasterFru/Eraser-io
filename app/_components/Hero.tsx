import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className='flex items-baseline 
        justify-center pt-20'>
        <h2 className='text-gray-800 border-gray-800 bg-white px-3 py-2 rounded-full text-center border hover:bg-gray-100 hover:text-gray-900'>See What's New | <span className='text-sky-300'>AI Diagram</span></h2>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-sky-500 font-extrabold sm:text-5xl">
            Document & diagrames
            <strong className="font-extrabold text-red-700 sm:block"> For Programmers. </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            All-in-one markdown editor collaborative canvas, and diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-sky-600 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-sky-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

