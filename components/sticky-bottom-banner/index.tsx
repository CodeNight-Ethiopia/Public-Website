import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export const StickyBottomBanner = () => (
  <div className="fixed inset-x-0 bottom-0 z-50">
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-indigo-800">
              <div
                className="h-6 w-6 flex justify-center items-center text-white"
                aria-hidden="true"
              >
                <Icons.codenight className="h-6 w-6" />
              </div>
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="hidden md:inline">
                Join the community on telegram
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://t.me/codenight"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);


/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qSLvAikDxKh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function StickyEventBottomBanner() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container px-4 py-3 md:py-4 flex items-center justify-between text-sm font-medium text-gray-500 bg-gray-50 dark:text-gray-400 dark:bg-gray-950">
        <span className="grid items-center gap-1.5">
          <span className="sr-only">Time remaining:</span>
          <Icons.clock className="h-6 w-6" />
          <span className="uppercase">Time remaining:</span>
          <span className="font-semibold">25 days 12 hours 10 minutes 5 seconds</span>
        </span>
        <Button size="sm" variant="outline">
          Join Event
        </Button>
      </div>
    </div>
  )
}


