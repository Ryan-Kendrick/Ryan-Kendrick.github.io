function Skills() {
  return (
    <>
      <div className="bg-slate-100">
        <h2 className="sm:text-5xl text-3xl py-10 pb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500 font-light text-center">
          Skills include
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 md:w-2/3 mx-auto gap-8 ">
          <img
            className="rounded w-36 h-36 shadow-xl mx-auto"
            src="images/html5.png"
            alt="html5"
          ></img>
          <img
            className="rounded w-36 h-36 shadow-xl mx-auto"
            src="images/css.png"
            alt="css3"
          ></img>
          <img
            className="rounded w-36 h-36 shadow-xl mx-auto"
            src="images/javascript.png"
            alt="javascript"
          ></img>
          <img
            className="rounded w-36 h-36 shadow-xl mx-auto"
            src="images/typescript.png"
            alt="typescript"
          ></img>
          <img
            className="rounded w-36 h-36 shadow-xl mx-auto"
            src="images/react.png"
            alt="react"
          ></img>
          <img
            className="rounded w-36 h-36 shadow-xl mx-auto"
            src="images/tailwind.png"
            alt="tailwind"
          ></img>
        </div>
      </div>
    </>
  )
}

export default Skills
