

export function HeroSection() {
  return (
    <section
    >
      <div
        className=" inset-0 sm:bg-transparent  ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl lg:flex"
      >

        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
            Codenight Developer Community

        </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Learn about codenight projects and join our ever-growing community
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded border-2 border-rose-600 px-12 py-3 text-sm font-medium shadow hover:bg-rose-700 focus:outline-none focus:ring sm:w-auto"
            >
              Know our Projects
            </a>

            <a
              href="#"
              className="block w-full rounded border-2 border-white  px-12 py-3 text-sm font-medium shadow hover:bg-rose-700 hover:border-rose-700  focus:outline-none focus:ring  sm:w-auto"
            >
              Watch our tutorials
            </a>
            <a
              href="#"
              className="block w-full rounded border-2 border-white  px-12 py-3 text-sm font-medium shadow hover:bg-rose-700 hover:border-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Demo Days
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
