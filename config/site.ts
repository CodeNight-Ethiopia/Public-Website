export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Codenight",
  description:
    "Community website for the rich and hungry",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Talent",
      href: "/talent",
    },
    {
      title: "Research",
      href: "/research",
    },
    {
      title: "News",
      href: "/news",
    },
    {
      title: "Projects",
      href: "/projects",
    },

  ],
  links: {
    linkedin: "https://www.linkedin.com/company/code-night/",
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/codeNight-Ethiopia",
    docs: "https://codenight.et",
  },
}
