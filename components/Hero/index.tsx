"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

const Hero = () => {
  const [showLight, setShowLight] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await delay(1000);
      setShowLight(true);

      await delay(200);
      setShowLight(false);

      await delay(50);
      setShowLight(true);
    };

    sequence();
  }, []);

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="w-[45rem]">
            <Image
              src={showLight ? "/images/hero/city-on.png" : "/images/hero/city-off.png"}
              alt="City on/off"
              width={720}
              height={563}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
