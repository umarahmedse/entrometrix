import Image from "next/image";

const FeatureFigure = ({ figure }) => {
  return (
    <>
      <div className="bg-gray-150 w-full flex justify-center rounded-lg py-2 h-64">
        <div className="relative w-full h-full">
          <Image
            src={figure.src}
            alt="feature figure"
            fill
          />
        </div>
      </div>
      <div className="w-full mt-5">
        <p className="text-black text-xl dark:text-white">
          {figure.desc}
        </p>
      </div>
    </>
  );
};

export default FeatureFigure;
