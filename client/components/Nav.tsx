import { Link } from 'react-scroll'
import Profile from './Profile'
import React, { useState } from 'react'

function Nav() {
  const [navPos, setNavPos] = useState(0)
  const [profilePos, setProfilePos] = useState(0)
  const [makeSticky, setMakeSticky] = useState(false)

  function checkNavPos(e: React.UIEvent<HTMLElement>) {
    const height = e.currentTarget.scrollTop
    setNavPos(height)
    console.log(navPos)
  }

  function checkProfilePos(e: React.UIEvent<HTMLElement>) {
    const height = e.currentTarget.scrollTop
    setProfilePos(height)
    console.log(profilePos)
  }

  return (
    <>
      <header
        id="header"
        className={
          'relative h-28 text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-500 shadow-3xl' +
          (makeSticky && 'sticky top-0 transition-all duration-500')
        }
      >
        <div
          onScroll={checkNavPos}
          className="h-full w-11/12 md:w-10/12 mx-auto flex flex-wrap py-8 md:flex-row items-center"
        >
          <a
            className="absolute w-20 h-20 text-white rounded-full ring-2 ring-white hidden md:block"
            href="images/ryan.png"
          >
            <img
              className="rounded-full"
              src="images/ryan.png"
              alt="Ryan"
            ></img>
          </a>
          <h1 className="text-2xl sm:text-3xl md:pl-20 mx-auto md:ml-2 font-bold">
            Portfolio of Ryan Kendrick
          </h1>
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
      </header>
      <Profile setProfilePos={checkProfilePos} />
    </>
  )
}

export default Nav
