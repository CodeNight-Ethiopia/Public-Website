/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b6yCYVIVCHM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Icons } from "../icons";

export function HeroSection() {
  return (
    <div className="py-10 lg:py-16 grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            How to speak more confidently and persuasively
          </h1>
          <p className="max-w-prose text-gray-500 md:text-xl dark:text-gray-400">
            Matt Abrahams is a renowned communication expert, with decades of teaching, coaching, and consulting
            experience. At Stanford University, he teaches a business school class on strategic communication. Beyond
            academia.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Join
          </Link>
          <Link
            className="flex h-9 items-center rounded-md px-3 text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <Icons.twitter className="h-4 w-4 px-2" />
            Twitter
          </Link>
          <Link
            className="flex h-9 items-center rounded-md px-3 text-sm font-medium text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <Icons.youtube className="h-4 w-4 px-2" />
            YouTube
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center rounded-lg overflow-hidden">
        <img alt="Image" className="aspect-2/1 object-cover" height="300" src="/placeholder.svg" width="600" />
      </div>
    </div>
  )
}
