import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { HeroSection } from "@/components/hero";
import { Programs } from "@/components/programs";
import { Partners } from "@/components/footer/partners";
import { StickyBottomBanner } from "@/components/sticky-bottom-banner";
import { AboutUs } from "@/components/aboutus";
import Contributors from "@/components/contributers";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <main>
          <HeroSection />
          <Programs />
          <AboutUs />
          <Partners />
          <Contributors />
        </main>
        <StickyBottomBanner />
    </section>
  )
}
