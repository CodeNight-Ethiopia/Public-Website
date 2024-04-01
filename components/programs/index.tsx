import { Icons } from "../icons";


const programs = [
  {
    name: "Open Mic - sunday",
    description:
      `Join us for open mic discussions where everyone has a chance to share their thoughts and ideas. It's a
                great way to connect with the community and engage in lively conversations.`,
    icon: () => < Icons.microphone className="h-4 w-4" />
  },
  {
    name: "Talk Show - 1/month",
    description:
      ` We're bringing you a talk show with some of the most influential and interesting guests. Get ready for
              inspiring conversations, behind-the-scenes stories, and thought-provoking discussions.`,
    icon: () => < Icons.microphone className="h-4 w-4" />,
  },
  {
    name: "Chat with other developers - 24/7",
    description: `Join our community chat on Telegram and connect with other members. Share your ideas, ask questions, and
              be part of the conversation. It's the perfect place to network and make new friends.`,
    icon: () => < Icons.chat className="h-4 w-4" />,
  },
  {
    name: "Meetups",
    description: `Join our community chat on Telegram and connect with other members. Share your ideas, ask questions, and
              be part of the conversation. It's the perfect place to network and make new friends.`,
    icon: () => < Icons.slogan className="h-4 w-4" />,
  },
];



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/76MVgUUNEYZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export  function Programs() {
  return (
    <div className="container relative flex flex-col justify-between h-full  px-0 mt-5">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight">Services</h2>
      <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Open Mic</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">We're bringing you a talk show with some of the most influential and interesting guests. Get ready for
                  inspiring conversations, behind-the-scenes stories, and thought-provoking discussions.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-purple-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">News</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                  focus on understanding and analyzing data to provide a semantic web.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
              <div className="relative h-full p-5  border-2 border-blue-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Talk Show </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                <p className="mb-2 text-gray-600">We're bringing you a talk show with some of the most influential and interesting guests. Get ready for
                  inspiring conversations, behind-the-scenes stories, and thought-provoking discussions.</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
              <div className="relative h-full p-5  border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Chat with other developers </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Join our community chat on Telegram and connect with other members. Share your ideas, ask questions, and
                  be part of the conversation. It's the perfect place to network and make new friends.</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
              <div className="relative h-full p-5 border-2 border-green-500 rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Meetups</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">Join our meetup events and connect with other members. Share your ideas, ask questions, and
                  be part of the conversation. It's the perfect place to network and make new friends.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

