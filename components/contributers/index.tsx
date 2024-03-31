import Image from "next/image";
import Link from "next/link";

const Contributors = async () => {
  const contributorAPI =
    "https://api.github.com/repos/CodeNight-Ethiopia/codenight-frontend/contributors";
  const data: any = await fetch(contributorAPI) as any
  const contributors = await data.json();
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center my-10">
        Our Contributors
      </h1>
      {/* Contributors section */}
      <section className="max-w-2xl flex flex-wrap gap-4 justify-center mx-auto px-10">
        {contributors.map((contributor: any) => {
          return (
            <Link
              href={(contributor).html_url}
              key={(contributor).id}
              className="relative rounded-full overflow-hidden h-12 w-12 cursor-pointer"
            >
              <Image
                src={(contributor).avatar_url}
                alt={(contributor).login}
                height={50}
                width={50}
              />
            </Link>
          );
        })}
      </section>
      {/* spacing */}
      <div className="py-16" />
    </>
  );
};

export default Contributors;
