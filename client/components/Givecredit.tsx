function Givecredit() {
  return (
    <>
      <div className="bg-slate-700 py-20 text-slate-100 text-lg font-medium font-sans">
        <div data-aos="fade-in">
          <div className="flex px-5 py-12 lg:flex-row flex-col text-white justify-between shadow-amber-500 shadow-3xl ">
            <div className="basis-1/3 flex-initial lg:flex-shrink md:pb-10 flex flex-col mx-auto ">
              <h2 className=" text-5xl pb-12 text-center">Give Credit</h2>
              <p>
                A tool to streamline and promote charitable giving in New
                Zealand by combining a tax calculator with a tax credit
                calculator.
              </p>
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
              <div className="pt-20 mx-auto">
                <form
                  action="https://github.com/Ryan-Kendrick/give-credit"
                  target="_blank"
                >
                  <span className="inline-block border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">
                    <input type="submit" value="View on GitHub"></input>
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
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none place-self-center">
              <img
                className="w-full h-full object-center object-cover m-auto"
                src="images/givecredit2.png"
                alt="give credit"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Givecredit
