function Nav() {
  return (
    <>
      <header className="relative h-28 text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-500 w-screen">
        <div className="h-full w-11/12 md:w-10/12 mx-auto flex flex-wrap py-8 flex-col md:flex-row items-center">
          <img
            className="absolute w-20 h-20 text-white rounded-full ring-2 ring-white hidden md:block"
            src="images/ryan.png"
            alt="Ryan"
          ></img>
          <h1 className="text-3xl pl-20 ml-2 font-bold">
            Portfolio of Ryan Kendrick
          </h1>
          <nav className="h-full md:ml-auto font-medium text-lg flex flex-wrap items-center text-base justify-center">
            <a className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
              Home
            </a>
            <a className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
              Profile
            </a>
            <a className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
              Skills
            </a>
            <a className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
              Portfolio
            </a>
            <a className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
