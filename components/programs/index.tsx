import { Icons } from "../icons";


const programs = [
  {
    name: "Debugging Session - Wednesday",
    description:
      "Ask your questions and get answers from experienced developers.",
    icon: Icons.debugging
  },
  {
    name: "Open Mic Discussion - Sunday",
    description:
      "Join our weekly discussion about the latest technologies and trends.",
    icon: Icons.openmic,
  },
  {
    name: "Chat with other developers - 24/7",
    description: "Chat with other developers and share your knowledge.",
    icon: Icons.chat,
  },
];


export const Programs = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600">
        Our Programs
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Meet our Community Members
      </p>

      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {programs.map((feature) => (
            <div key={feature.name} className="pt-6 h-full">
              <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg text-white">
                      <feature.icon />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
