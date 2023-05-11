import { Link } from 'react-scroll'

function Navcontent() {
  return (
    <div className="h-full w-11/12 md:w-10/12 mx-auto flex flex-wrap  md:flex-row items-center">
      <a
        className="absolute w-20 h-20 text-white rounded-full ring-2 ring-white hidden md:block"
        href="images/ryan.png"
      >
        <img className="rounded-full" src="images/ryan.png" alt="Ryan"></img>
      </a>
      <Link
        activeClass="active"
        to="static-header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <h1
          id="top"
          className="text-2xl sm:text-3xl md:pl-20 mx-auto md:ml-2 font-bold cursor-pointer"
        >
          Portfolio of Ryan Kendrick
        </h1>
      </Link>
      <nav className="h-full md:ml-auto md:mr-0 font-medium text-lg flex flex-wrap items-center text-base justify-center mx-auto">
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
            Skills
          </div>
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500">
            Projects
          </div>
        </Link>
        <a
          className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500"
          href="images/ryanscv.pdf"
        >
          CV
        </a>
        <a
          className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500"
          href="https://www.linkedin.com/in/ryan-kendrick-275258272/"
        >
          LinkedIn
        </a>
        <a
          className="mx-4 cursor-pointer transition-all duration-100 hover:scale-110 hover:text-red-500"
          href="https://github.com/Ryan-Kendrick"
        >
          GitHub
        </a>
      </nav>
    </div>
  )
}

export default Navcontent
