import SectionTitle from "../../Common/SectionTitle";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="demo_section" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Experience Our Energy Balance Platform"
            paragraph="Input your data, run simulations, and visualize results in real time. Our MVP delivers clear, actionable insights for chemical plant operations."
            center
          />

          <div className="w-full flex justify-center mb-8">
            <button className="shadow-submit dark:shadow-submit-dark rounded-full bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
              Try for free
            </button>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src="/images/demo/demo-preview.gif"
              alt="Demo Preview"
              width={900}
              height={506}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
