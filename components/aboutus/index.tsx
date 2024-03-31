
export const AboutUs = () => (
  <div className="bg-white pt-16 lg:py-24">
    <div className="pb-16 bg-indigo-600 lg:pb-0 lg:z-10 lg:relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="object-cover lg:h-full lg:w-full"
                src="/big-banner.png"
                alt="CodeNight Developers Community"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <p className="mt-6 text-2xl font-medium text-white">
                  CodeNight Developers Community is a community of developers
                  who are passionate about coding, software development, and
                  technology in general. the community are individuals from
                  diverse backgrounds and experiences, all coming together to
                  learn from one another and contribute to the world of software
                  development.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
);