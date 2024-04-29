import Link from "next/link"

const MyCommunitySections = [
  {
    title: "Getting Started",
    links: [
      {
        title: "Introduction to Codenight",
        link: "",
      },
      {
        title: "About Codenight",
        link: "",
      },
      {
        title: "Technical Steering Committee",
        link: "",
      },
      {
        title: "Governance model",
        link: "",
      },
      {
        title: "Working Groups",
        link: "",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        title: "Project #1",
        link: "",
      },
      {
        title: "Project #2",
        link: "",
      },
      {
        title: "Project #3",
        link: "",
      },
      {
        title: "Project #4",
        link: "",
      },
      {
        title: "Project #5",
        link: "",
      },
    ],
  },
  {
    title: "Contributing",
    links: [
      {
        title: "Contributing guidelines",
        link: "",
      },
      {
        title: "Code contributions",
        link: "",
      },
      {
        title: "Documentation contributions",
        link: "",
      },
      {
        title: "Management contributions",
        link: "",
      },
    ],
  },
  {
    title: "Safety & Support",
    links: [
      {
        title: "Community Code of Conduct",
        link: "",
      },
      {
        title: "Community support",
        link: "",
      },
    ],
  },
  {
    title: "Miscellaneous",
    links: [
      {
        title: "Frequently Asked Questions",
        link: "",
      },
      {
        title: "Join moja global",
        link: "",
      },
    ],
  },
]


export default function Community() {
  return (
    <section className="w-full max-w-8xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-6">
        <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl">
          Know the Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {MyCommunitySections.map(({ title, links }, key) => (
            <div key={key} className="space-y-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="space-y-3">
                {links.map(({ title, link }, index) => (
                  <article
                    key={index}
                    className="dark:bg-gray-950 hover:underline transition-shadow"
                  >
                    <Link href={link}>
                      <h4 className=" font-medium">{title}</h4>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
