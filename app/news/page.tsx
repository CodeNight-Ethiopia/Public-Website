import styles from "./styles.module.css"

export default function IndexPage() {
  return (
    <>
      <section className="flex h-[100vh] items-center justify-center ">
        <div className={styles.pulse}>
        <span></span>
          <div className="mt-40 items-center text-center">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <div className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                News Room
              </div>
            </h1>
            <p className="text-center   text-gray-500 dark:text-gray-400 lg:text-xl">
              News, Projects and Resources compiled
            </p>
            <p className="text-center   text-gray-500 dark:text-gray-400 lg:text-xl">
              from our dedicated community
            </p>
          </div>    
        </div>
      </section>
    </>
  )
}
