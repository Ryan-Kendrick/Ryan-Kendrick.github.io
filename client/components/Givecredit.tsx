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
                  calculator. Made In React using TypeScript and Tailwind.
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
                A passion project initially envisioned to explore Semantic UI,
                later remade in Tailwind. Made to build something around what
                I&apos;m pasionate about - Effective Altruism. A work in
                progress, lots of neat maths and React magic but the UI needs
                refinement.
              </p>
              <div className="pt-12 mx-auto flex">
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
                <form action="https://give-credit.vercel.app/" target="_blank">
                  <span className="cursor-pointer inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:shadow-outline">
                    <input
                      className="cursor-pointer"
                      type="submit"
                      value="View deployed version"
                    ></input>
                  </span>
                </form>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="flex">
            <div className="basis 2/3 relative place-self-center lg:ml-10 pt-10 md:pt-0">
              <div className="grid grid-cols-2 gap-2">
                <a href="images/gc1.jpg">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="images/gc1.jpg"
                      alt="Give Credit"
                    />
                  </div>
                </a>
                <a href="images/gc2.jpg">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="images/gc2.jpg"
                      alt="Give Credit tax calculator"
                    />
                  </div>
                </a>
                <a href="images/gc3.jpg">
                  <div className="bg-black bg-opacity-20 rounded-lg">
                    <img
                      className="h-auto max-w-full max-h-[430px] rounded-lg m-auto"
                      src="images/gc3.jpg"
                      alt="Give Credit on mobile"
                    />
                  </div>
                </a>
                <a href="images/gc4.jpg">
                  <div className="bg-black bg-opacity-20 rounded-lg">
                    <img
                      className="h-auto max-w-full max-h-[430px] rounded-lg m-auto"
                      src="images/gc4.jpg"
                      alt="Give Credit on mobile"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Givecredit
