import { HeroSection } from "@/components/hero";
import Services from "@/components/programs";
import { Partners } from "@/components/footer/partners";
import StickyEventBottomBanner from "@/components/sticky-bottom-banner";
import Contributors from "@/components/contributers";
import CommunitySupport from "@/components/community";

export default function IndexPage() {
  return (
    <section className=" grid items-center gap-6 pb-8 pt-6 md:py-10">
        <main>
          <HeroSection />
          <CommunitySupport />
          <Services />
          <Contributors />
          <Partners />
        </main>
        <StickyEventBottomBanner />
    </section>
  )
}

