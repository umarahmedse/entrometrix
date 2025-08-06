const SubHero2 = () => {
  return (
    <>
      <section
        id="SubHero2"
        className="dark:bg-gray-dark relative bg-white pb-8 pt-[120px] md:pt-[150px] xl:pt-[180px] 2xl:pt-[160px]"
      >
        <div className="container flex flex-col-reverse lg:flex-row gap-32">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="border border-primary rounded-2xl w-full">
              <video width="100%" autoPlay loop muted playsInline>
                <source src="/images/anims/pid.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* bg-line 1 */}
            {/* <div className="h-0 w-full relative hidden 2xl:block">
              <div className="absolute h-[620px] w-full">
                <div className="border-r border-b rounded-br-2xl line-1-t border-primary" />
                <div className="border-l border-b border-t rounded-bl-2xl rounded-tl-2xl line-1-b border-primary" />
              </div>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold mt-5">
              <span className="text-primary">Cut</span>&nbsp;emissions across your operations
            </h3>
            <p className="text-2xl leading-relaxed py-9 dark:text-gray-400">
              <strong className="text-white">EntroMetrix improves energy and resource efficiency</strong> to reduce Scope 1 and 2 emissions by cutting waste and optimising equipment performance, while supporting Scope 3 reductions through leaner, more efficient supply chain operations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubHero2;
