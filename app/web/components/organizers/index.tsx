import React from 'react'
import Image from 'next/image'

export default function Organizers() {
  return (
    <section className="body-font overflow-hidden text-gray-600">
  <div className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Meet our Team</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is the team that makes this community run.</p>
    </div>

    <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <Image src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" width={96} height={96} loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg"></div>
          <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">Founder</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <Image src="https://media.licdn.com/dms/image/D4D03AQFeTTg5TdpimQ/profile-displayphoto-shrink_200_200/0/1693901693991?e=1703116800&v=beta&t=_HjlGoCx1t_fMra0MLF_hQ-UAAvnWUzangy7Ccv8UQ4" width={96} height={96} loading="lazy" alt="Photo by christian ferrer" className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Nebil Mohammed</div>
          <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">Founder</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <Image src="https://media.licdn.com/dms/image/D4E03AQGJ664HwelM4Q/profile-displayphoto-shrink_100_100/0/1678690800685?e=1703116800&v=beta&t=0MrxAGMilv9eoeMeF2Pgv-GV5yIOwgHt4W9SEa1U0bM" width={96} height={96}  loading="lazy" alt="Photo by Ayo Ogunseinde" className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Dera Adugna</div>
          <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">Founder</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <Image src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256" width={96} height={96}  loading="lazy" alt="Photo by Elizeu Dias" className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Fraol Lemecha</div>
          <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">Organizer</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
        <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32">
          <Image src="https://media.licdn.com/dms/image/D4D03AQG8z1ACo5LzZg/profile-displayphoto-shrink_200_200/0/1696791618214?e=1703116800&v=beta&t=cPH2uvKU-q-ueETF_8Puz0GFxZvNncElK0b2Rn3Pd3k" width={96} height={96}  loading="lazy" alt="Photo by Matheus Ferrero" className="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 sm:text-left md:text-lg">Behailu Getachew</div>
          <p className="text-center text-sm text-gray-500 sm:text-left md:text-base">Organizer</p>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}
