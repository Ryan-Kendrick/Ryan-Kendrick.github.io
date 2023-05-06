function Profile() {
  return (
    <>
      <div className="flex min-h-[40vh] px-5 py-12 md:flex-row flex-col items-start text-white bg-slate-900 justify-between">
        <div className="basis-2/3 min-h-[40vh] md:border-r-4 px-2 border-gray-300 text-base lg:flex-grow md:w-1/2 ">
          <h2 className="text-5xl py-12 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center">
            About Me
          </h2>
          <p className="text-slate-200 text-lg font-medium font-sans">
            <p className="text-2xl pb-2">
              I&apos;m Ryan and I&apos;m a web developer with a background in
              technical support and the social sciences.
            </p>
            <br></br>
            In the past few years I have been getting back to my technical
            roots, exploring what a more technical career path might look like.
            It was when I began helping out with the websites of a think-tank at
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
        <div className="min-h-[40vh] basis-1/3 relative text-base lg:flex-grow md:w-1/2  divide-l-4">
          <h2 className="text-5xl py-12 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center	">
            Ryan Online
          </h2>
          <ul className="py-12 list-none text-white text-lg pl-2">
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
          <div className="flex pt-12 justify-center	items-center	">
            <a
              href="images/ryanscv.pdf"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>View CV</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
