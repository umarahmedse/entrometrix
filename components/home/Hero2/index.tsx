"use client";

const Hero2 = () => {
  return (
    <>
      <section
        id="hero2"
        className="relative bg-white pb-8 pt-[120px] dark:bg-gray-dark md:pt-[150px] xl:pt-[200px] 2xl:pt-[300px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row lg:gap-32">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-full">
              {/* bg-line 12 */}
              <div className="relative hidden h-0 w-full 2xl:block">
                <span className="line-12 absolute rounded-tr-2xl border-r border-t border-primary" />
              </div>
            
              <video width="100%" autoPlay loop muted playsInline className="border border-primary rounded-2xl">
                <source src="/images/anims/pid.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>

              {/* bg-line 13 */}
              <div className="relative hidden h-0 w-full 2xl:block">
                <span className="line-13 absolute rounded-bl-2xl border-b border-l border-primary" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-6xl">
              <span className="text-primary">Optimisation</span>&nbsp;at
              <br />
              Every Stage of the Process
            </h1>
            <p className="py-9 text-2xl leading-relaxed dark:text-gray-400">
              Our platform applies AI across the full production cycle,
              translating operational expertise into continuous, real-time
              optimisation at every stage of the process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
