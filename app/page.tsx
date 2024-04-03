import { HeroSection } from "@/components/hero";
import { Programs } from "@/components/programs";
import { Partners } from "@/components/footer/partners";
import StickyEventBottomBanner from "@/components/sticky-bottom-banner";
import Contributors from "@/components/contributers";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <main>
          <HeroSection />
          <Programs />
          <Partners />
          <Contributors />
        </main>
        <StickyEventBottomBanner />
    </section>
  )
}

