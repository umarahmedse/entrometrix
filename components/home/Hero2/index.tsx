"use client";

const Hero2 = () => {
  return (
    <>
      <section
        id="hero2"
        className="dark:bg-gray-dark relative bg-white pb-8 pt-[120px] md:pt-[150px] xl:pt-[200px] 2xl:pt-[300px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row gap-32">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full">
              {/* bg-line 12 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-12 border-r border-t rounded-tr-2xl border-primary" />
              </div>
            
              <video width="100%" autoPlay loop muted playsInline>
                <source src="/images/anims/pid.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* bg-line 13 */}
              <div className="h-0 w-full relative hidden 2xl:block">
                <span className="absolute line-13 border-l border-b rounded-bl-2xl border-primary" />
              </div>
            </div>

          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-5">
              <span className="text-primary">Optimization</span>&nbsp;at<br/>Every Stage of the Process
            </h3>
            <p className="text-2xl leading-relaxed py-9 dark:text-gray-400">
               Our platform applies AI across the full production cycle, translating operational expertise into continuous, real-time optimisation at every stage of the process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
