function Profile() {
  return (
    <>
      <div className="flex min-h-[50vh] px-5 py-12 md:flex-row flex-col items-center text-white bg-zinc-600 justify-between">
        <div className="basis-2/3 relative md:border-r-4 px-2 border-amber-500 text-base lg:w-full lg:flex-grow md:w-1/2  self-center">
          <h2 className="lg:left-0 lg:right-0 lg:-top-20 lg:absolute  text-5xl py-12 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center">
            About Me
          </h2>
          <p className="relative text-slate-200 text-lg font-medium font-sans">
            <span className="">I</span>&apos;m Ryan and I&apos;m a web developer
            with a background in technical support and the social sciences. In
            the past few years I have been getting back to my technical roots,
            exploring what a more technical career path might look like. It was
            when I began helping out with the websites of a think-tank at
            Victoria University on a contract basis that I found what I was
            looking for. I was so fascinated by the work of my predecessor that
            I began taking coding courses. When I finally managed to clone down
            the website to start experimenting with my own code, it dawned on me
            that I had found what I was looking for. Dev Academy seemed like
            natural progression. This process of upskilling and orienting my
            career towards progressively more technical pursuits has been a
            blast, and I am looking to continue that journey.
          </p>
        </div>
        <div className="basis-1/3 relative text-base lg:w-full lg:flex-grow md:w-1/2  divide-l-4 self-center">
          <h2 className="text-5xl py-12 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center	">
            Ryan Online
          </h2>
          <ul className="pt-12 list-none text-white text-lg pl-2">
            <li className="flex items-center">
              <img
                className="basis 1/10 inline-block w-4 h-4 rounded-full ring-1 ring-white"
                src="images/linkedin.png"
                alt="linkedin icon"
              ></img>
              <a
                className="inline-block pl-3 underline underline-offset-2 decoration-indigo-500"
                href="https://www.linkedin.com/in/ryan-kendrick-275258272/"
              >
                https://www.linkedin.com/in/ryan-kendrick-275258272/
              </a>
            </li>
            <li className="flex items-center">
              <img
                className="inline-block w-4 h-4 rounded-full ring-1 ring-white"
                src="images/github.png"
                alt="github icon"
              ></img>
              <a
                className="inline-block pl-3 underline underline-offset-2 decoration-indigo-500"
                href="https://github.com/Ryan-Kendrick"
              >
                https://github.com/Ryan-Kendrick
              </a>
            </li>
            <li className="flex items-center">
              <img
                className="inline-block w-4 h-4 rounded-full ring-1 ring-white"
                src="images/location.png"
                alt="location icon"
              ></img>
              <p className="inline-block pl-3">Wellington Central</p>
            </li>
            <li className="flex items-center">
              <img
                className="inline-block w-4 h-4 rounded-full ring-1 ring-white"
                src="images/flag.png"
                alt="nz flag icon"
              ></img>
              <p className="inline-block pl-3">NZ citizen </p>
            </li>
          </ul>
          <div className="pt-20 left-0 right-0">
            <a
              href="images/ryanscv.pdf"
              className="rounded inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span className="relative">View CV</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
