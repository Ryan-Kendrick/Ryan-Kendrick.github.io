/* eslint-disable jsx-a11y/media-has-caption */
function Pingpong() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-sky-500 py-20 text-slate-100 text-lg font-medium font-sans">
        <h2 className="sm:text-5xl text-3xl pb-10 pb-12 text-white text-center font-bold">
          Projects
        </h2>
        <div data-aos="fade-in">
          <div className="flex px-5 py-12 md:flex-row flex-col text-white justify-between">
            <div className="basis-1/3 flex-initial lg:flex-shrink md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mx-auto">
              <h2 className="sm:text-5xl text-3xl pb-12 italic text-center">
                PINGPONG
              </h2>
              <p>
                A minimalistic social media app for spontaneous meetups. Built
                in React Native for Android and iOS.
              </p>
              <h3 className="sm:text-2xl text-1xl py-6">Features</h3>
              <ul className="list-disc list-inside">
                <li>Friends list with pull to refresh functionality</li>
                <li>Slick animations</li>
                <li>Google Places location data paired with an activity</li>
                <li>Start Pinging when you want to meetup</li>
              </ul>
            </div>
            <video width="720" height="480" controls>
              <source src="video/pingpong.mp4" type="video/mp4"></source>
              Your browser does not support mp4 video
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pingpong
