export default function HeroSection() {
  return (
    <div
      id="home"
      className="header-overlay flex items-center justify-center overflow-hidden relative w-full h-screen bg-black"
    >
      <div className="relative z-20 mx-auto px-5 sm:px-10 md:max-w-[1080px] md:px-16 lg:px-12 xl:px-4 text-center flex flex-col items-center justify-center h-full">
        <div className="relative z-20">
          <h5 className="header-subtitle text-white z-10 text-8xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter">
            Deep Dive,
          </h5>
          <h5 className="header-subtitle text-white z-10 text-8xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter">
            Seek Clarity.
          </h5>
          <h1 className="header-title text-white mt-5 text-lg sm:text-xl md:text-2xl">
            Hi, I&apos;m Satya, an aspiring full-
            <span className="italic">stuck</span> GIS-software engineer
          </h1>
        </div>
      </div>
    </div>
  );
}
