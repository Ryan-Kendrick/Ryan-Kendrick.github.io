function Profile() {
  return (
    <>
      <div className="flex px-5 py-12 md:flex-row flex-col items-center text-white bg-zinc-600 justify-between">
        <div className="basis-1/3 flex-initial lg:flex-shrink md:w-1/2 lg:pr-24 md:pr-16 flex flex-col text-left">
          <h2 className="sm:text-5xl text-3xl pb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light self-center	">
            Find Me Online
          </h2>
          <ul className="list-none text-white text-lg">
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
        </div>
        <div className="basis-2/3 md:border-l-4 pl-2 border-sky-500 text-base lg:w-full lg:flex-grow md:w-1/2  divide-l-4 self-center">
          <h2 className="sm:text-5xl pt-12 text-3xl pb-12 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center	">
            Who am I?
          </h2>
          <p className="text-slate-200 text-lg font-medium font-sans">
            <span className="">I</span>&apos;m Ryan and I&apos;m a web developer
            with a background in technical support and the social sciences. It
            was when I started doing web development for a think-tank and began
            digging into coding and the technical concepts behind what I was
            doing, that the genuine excitement brought me back to my childhood
            being around family in tech and I began to dream about what it would
            be like to do something this fun for a living. I had been angling
            for more and more technical things roles but that was the moment I
            said this is it. My passion is for effective altruism, so starting
            my tax credit guide as a personal project at Dev Academy has been
            the cherry on top. My aim now is to continue on this path with an
            eye towards projects that people find useful or help me to grow my
            skills.
          </p>
        </div>
      </div>
    </>
  )
}

export default Profile
