function Skills() {
  return (
    <>
      <div className="w-full bg-skills bg-cover bg-center">
        <div id="skills" className="py-20 backdrop-blur-md">
          <h2 className=" text-5xl pb-10 pb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center">
            Talents Include:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 mx-auto gap-8">
            <div data-aos="fade-in">
              <div className="group relative hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="rounded w-36 h-36 shadow-xl mx-auto bg-slate-100 border-double border-4 border-gray-800"
                  src="images/html5.png"
                  alt="html5"
                ></img>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  HTML5
                </div>
              </div>
            </div>
            <div data-aos="fade-in">
              <div className="group relative hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="rounded w-36 h-36 shadow-xl mx-auto bg-slate-100 border-double border-4 border-gray-800"
                  src="images/css.png"
                  alt="css3"
                ></img>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  CSS3
                </div>
              </div>
            </div>
            <div data-aos="fade-in">
              <div className="group relative hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="rounded w-36 h-36 shadow-xl mx-auto bg-slate-100 border-double border-4 border-gray-800"
                  src="images/javascript.png"
                  alt="javascript"
                ></img>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  JavaScript
                </div>
              </div>
            </div>
            <div data-aos="fade-in">
              <div className="group relative hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="rounded w-36 h-36 shadow-xl mx-auto bg-slate-100 border-double border-4 border-gray-800"
                  src="images/typescript.png"
                  alt="typescript"
                ></img>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  TypeScript
                </div>
              </div>
            </div>
            <div data-aos="fade-in">
              <div className="group relative hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="rounded w-36 h-36 shadow-xl mx-auto bg-slate-100 border-double border-4 border-gray-800"
                  src="images/react.png"
                  alt="react"
                ></img>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  React/React Native
                </div>
              </div>
            </div>
            <div data-aos="fade-in">
              <div className="group relative hover:-translate-y-1 hover:scale-110 duration-300">
                <img
                  className="rounded w-36 h-36 shadow-xl mx-auto bg-slate-100 border-double border-4 border-gray-800"
                  src="images/tailwind.png"
                  alt="tailwind"
                ></img>
                <div className="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white transition-opacity duration-150 ease-in opacity-0 group-hover:opacity-100">
                  <span className="absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  Tailwind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
