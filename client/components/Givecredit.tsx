function Givecredit() {
  return (
    <>
      <div className="bg-slate-700 py-20 text-slate-100 text-lg font-medium font-sans">
        <div className="flex px-5 py-12 lg:flex-row flex-col text-white justify-between shadow-amber-500 shadow-3xl ">
          <div data-aos="fade-right">
            <div className="basis-1/3 flex-initial lg:flex-shrink md:pb-10 flex flex-col mx-auto min-w-[33.33333vw]">
              <a href="https://github.com/Ryan-Kendrick/give-credit">
                <h2 className="hover:text-amber-500 hover:scale-110 duration-300 text-5xl pb-12 text-center">
                  Give Credit
                </h2>
              </a>
              <blockquote className="p-4 my-4 border-l-4 border-gray-300 ">
                <p className="text-xl italic font-medium leading-relaxed">
                  A tool to streamline and promote charitable giving in New
                  Zealand by combining a tax calculator with a tax credit
                  calculator. Made In React using TypeScript and Semantic UI.
                </p>
              </blockquote>

              <h3 className="sm:text-2xl text-1xl py-6">Features</h3>
              <ul className="list-disc list-inside">
                <li>
                  Accurately applies marginal tax rates to calculate PAYE for a
                  given annual income
                </li>
                <li>
                  Checks if and how much credit to apply when IETC is enabled
                </li>
                <li>
                  Support for KiwiSaver and Student Loans including custom
                  repayment rates
                </li>
              </ul>
              <p className="mt-3 pt-3 border-t">
                A passion project to explore Semantic UI while building
                something around what I&apos;m pasionate about - Effective
                Altruism. An early work in progress, lots of neat maths but the
                UI needs work.
              </p>
              <div className="pt-12 mx-auto">
                <form
                  action="https://github.com/Ryan-Kendrick/give-credit"
                  target="_blank"
                >
                  <span className="cursor-pointer inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:shadow-outline">
                    <input
                      className="cursor-pointer"
                      type="submit"
                      value="See on GitHub"
                    ></input>
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
          </div>
          <div data-aos="fade-left" className="flex">
            <div className="basis 2/3 relative place-self-center lg:ml-10 pt-10 md:pt-0">
              {/* <div className="grid grid-cols-2 gap-2">
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                    alt=""
                  />
                </div>
              </div> */}

              <img
                className="w-full h-full object-center object-cover m-auto"
                src="images/givecredit2.png"
                alt="give credit"
              ></img>
              <div className="absolute rounded w-3/4 left-0 right-0 mx-auto top-12 md:top-5 py-2 bg-gray-900 shadow-3xl opacity-75">
                <svg
                  className="mx-auto my-2 w-10 h-10 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="yellow"
                    d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"
                  />
                </svg>
                <h3 className="tracking-tight leading-none text-xl md:text-2xl xl:text-3xl text-white text-center">
                  Under Construction
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Givecredit
