import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/comming-soon.css";

export const metadata: Metadata = {
  title: "Entro Metrix - Comming Soon",
  description: "",
};

export default function CommingSoon() {
  return (
    <div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
      
      <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5">
        <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
          <div className="w-full flex justify-center px-4 mb-8">
            <div className="w-80 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className="header-logo block w-full"
              >
                <Image
                  src="/images/logo/logo-2.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full"
                />
              </Link>
            </div>
          </div>

          <h1 className="text-5xl">We are <b>Almost</b> there!</h1>
          <p>Stay tuned for something amazing!!!</p>

          <div className="mt-10 mb-5">
            <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
              <div className="rounded-full bg-primary text-xs leading-none text-center text-white py-1 relative"
                style={{ width: "75%", left: "-1px" }}>75%</div>
            </div>
          </div>
        </div>
      </div>

		</div>
  );
}