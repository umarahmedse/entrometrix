const SectionTitle = ({
  title,
  paragraph,
  width = "820px",
  center,
  mb = "48px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] lg:text-7xl">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg lg:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
