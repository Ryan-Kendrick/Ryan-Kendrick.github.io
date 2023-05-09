import Profile from './Profile'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Navcontent from './Navcontent'

function Nav() {
  const [windowPos, setWindowPos] = useState(0)
  const [navPos, setNavPos] = useState(0)
  const [useSticky, setUseSticky] = useState(false)

  useEffect(() => {
    const handleScroll = (evt: Event) => {
      setWindowPos(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    windowPos > navPos - 130 ? setUseSticky(true) : setUseSticky(false)
  }, [windowPos, navPos])

  const [height, setHeight] = useState(null as string | null | number)

  useEffect(() => {
    useSticky ? setHeight('auto') : setHeight(0)
  }, [useSticky])

  document.getElementById('nav')

  return (
    <>
      {useSticky ? (
        <>
          <AnimateHeight
            duration={500}
            height={height === 'auto' ? height : 0}
            className="sticky top-0 z-50"
          >
            <header className="h-28 py-8 text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-500 sticky top-0 shadow-3xl">
              <Navcontent />
            </header>
          </AnimateHeight>
        </>
      ) : (
        <>
          <header
            id="static"
            className="relative h-28 py-8 text-neutral-50 bg-gradient-to-r from-sky-500 to-indigo-500 z-50"
          >
            <Navcontent />
          </header>
        </>
      )}
      <Profile setNavPos={setNavPos} />
    </>
  )
}

export default Nav
