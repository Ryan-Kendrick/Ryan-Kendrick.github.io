/* eslint-disable jsx-a11y/media-has-caption */
function Pingpong() {
  return (
    <>
      <div className=" bg-orange-500 py-20 text-slate-100 text-lg font-medium font-sans">
        <h2 className=" text-5xl pb-10 pb-12 text-white text-center font-bold">
          Projects
        </h2>
        <div data-aos="fade-in">
          <div className="flex px-5 py-12 lg:flex-row flex-col text-white justify-between shadow-amber-500 shadow-3xl ">
            <div className="basis-1/3 flex-initial lg:flex-shrink md:pb-10 flex flex-col mx-auto min-w-[33.3333vw] ">
              <a href="https://github.com/Ryan-Kendrick/pingpong">
                <h2 className="hover:text-sky-500 hover:scale-110 duration-300 text-5xl pb-12 italic text-center">
                  PINGPONG
                </h2>
              </a>
              <blockquote className="p-4 my-4 border-l-4 border-gray-300 ">
                <p className="text-xl italic font-medium leading-relaxed">
                  A minimalistic social media app for spontaneous meetups.
                  Frontend application built in React Native for Android and
                  iOS.
                </p>
              </blockquote>

              <h3 className="sm:text-2xl text-1xl py-6">Features</h3>
              <ul className="list-disc list-inside">
                <li>Friends list with pull to refresh functionality</li>
                <li>Slick animations</li>
                <li>Google Places location data paired with an activity</li>
                <li>Start Pinging when you want to meetup</li>
              </ul>
              <p className="mt-3 pt-3 border-t">
                A week-long project built to learn React Native, this project
                had a lot to teach. Authentication on mobile was the greatest
                challenge and with some more time I would like to deliver a more
                reliable experience outside of the browser.
              </p>
              <div className="pt-12 mx-auto flex">
                <form
                  action="https://github.com/Ryan-Kendrick/pingpong"
                  target="_blank"
                >
                  <span className="inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                    <input type="submit" value="Frontend on GitHub"></input>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block fill-current w-6 h-6 ml-2 mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                </form>
                <form
                  action="https://github.com/Ryan-Kendrick/pingpong-backend"
                  target="_blank"
                >
                  <span className="inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                    <input type="submit" value="Backend on GitHub"></input>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block fill-current w-6 h-6 ml-2 mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </span>
                </form>
              </div>
            </div>
            <div className="basis 2/3 relative place-self-center lg:ml-10">
              <video className="" width="1920" height="1080" controls>
                <source src="video/pingpong.mp4" type="video/mp4"></source>
                Your browser does not support mp4 video
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pingpong
