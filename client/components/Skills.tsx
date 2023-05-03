function Skills() {
  return (
    <>
      <div id="skills" className="bg-slate-100 py-20">
        <h2 className=" text-5xl pb-10 pb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center">
          Talents Include:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 mx-auto gap-8">
          <div data-aos="fade-in">
            <img
              className="rounded w-36 h-36 shadow-xl mx-auto "
              src="images/html5.png"
              alt="html5"
            ></img>
          </div>
          <div data-aos="fade-in">
            <img
              className="rounded w-36 h-36 shadow-xl mx-auto "
              src="images/css.png"
              alt="css3"
            ></img>
          </div>
          <div data-aos="fade-in">
            <img
              className="rounded w-36 h-36 shadow-xl mx-auto "
              src="images/javascript.png"
              alt="javascript"
            ></img>
          </div>
          <div data-aos="fade-in">
            <img
              className="rounded w-36 h-36 shadow-xl mx-auto "
              src="images/typescript.png"
              alt="typescript"
            ></img>
          </div>
          <div data-aos="fade-in">
            <img
              className="rounded w-36 h-36 shadow-xl mx-auto "
              src="images/react.png"
              alt="react"
            ></img>
          </div>
          <div data-aos="fade-in">
            <img
              className="rounded w-36 h-36 shadow-xl mx-auto"
              src="images/tailwind.png"
              alt="tailwind"
            ></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
