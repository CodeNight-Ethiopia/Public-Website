import Image from 'next/image';
export const Partners = () => (
  <div className="mb-24">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center">Special Thanks To</h2>
      <div className="flow-root mt-8 lg:mt-10">
        <div className="-mt-4 -ml-8 flex flex-wrap justify-center lg:-ml-4">
          <div className="mt-4 ml-8 flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4 flex justify-center">
            <picture>
              <Image
                className="h-12 outline-black outline-2 object-cover"
                src={"/assets/Image/hahucloud-logo.png"}
                alt="HahuCloud"
                width={300}
                height={48}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
);
