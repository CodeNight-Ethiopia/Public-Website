import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Hero from "./components/hero"
import Organizers from "./components/organizers"

export default function IndexPage() {
  return (
    <>
    <Hero/>
    <Organizers/>
    </>
  )
}
