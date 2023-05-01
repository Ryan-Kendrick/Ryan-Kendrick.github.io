function Profile() {
  return (
    <>
      <div className="flex px-5 py-12 md:flex-row flex-col items-center text-white bg-zinc-600 justify-around">
        <div className="basis-2/3 flex-initial lg:flex-shrink md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start items-start text-left 	">
          <h2 className="sm:text-5xl text-3xl pb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-rose-500 font-oswald font-light self-center	">
            Find Me Online
          </h2>
          <ul className="list-none">
            <li>
              <img
                className="inline-block w-4 h-4 text-white rounded-full ring-1 ring-white"
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
            <li>
              <img
                className="inline-block w-4 h-4 text-white rounded-full ring-1 ring-white"
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
            <li>
              <img
                className="inline-block w-4 h-4 text-white rounded-full ring-1 ring-white"
                src="images/location.png"
                alt="location icon"
              ></img>
              <p className="inline-block pl-3">Wellington Central</p>
            </li>
            <li>
              <img
                className="inline-block w-4 h-4 text-white rounded-full ring-1 ring-white"
                src="images/flag.png"
                alt="nz flag icon"
              ></img>
              <p className="inline-block pl-3">NZ citizen </p>
            </li>
          </ul>
        </div>
        <div className="basis-3/4 border-l-4 border-indigo-500 lg:max-w-md lg:w-full lg:flex-grow md:w-1/2  divide-x-4 self-center">
          <p>About me</p>
        </div>
      </div>
    </>
  )
}

export default Profile
