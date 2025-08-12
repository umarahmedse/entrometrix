import Image from "next/image";

const MO_ALI_LINKEDIN_URL = process.env.NEXT_PUBLIC_MO_ALI_LINKEDIN_URL;
const LUSIPH_LINKEDIN_URL = process.env.NEXT_PUBLIC_LUSIPH_LINKEDIN_URL;
const STEVE_LINKEDIN_URL = process.env.NEXT_PUBLIC_STEVE_LINKEDIN_URL;

const TeamMembers = () => {
  return (
    <section id="TeamMembers" className="pt-16 md:pt-20 lg:pt-28 relative">
      <div className="container">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 lg:mb-5 lg:px-8 flex flex-col items-center"
            data-wow-delay=".15s
            "
          >
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold text-center mb-8 z-10">
              <span className="text-primary">Our Team</span>
            </h3>
            {/* <p className="text-2xl leading-relaxed dark:text-gray-400 text-center">
              Meet our passionate team dedicated to delivering exceptional service and creating the best experience for our customers. Together, we bring expertise, creativity, and commitment to everything we do
            </p> */}
          </div>
        </div>
        <div className="w-full block md:flex gap-10 text-center mt-10">
          <div className="w-full lg:w-1/3 mb-8">
            <div className="w-full relative flex">
              <div className="w-0 relative hidden lg:block">
                <span className="absolute w-16 h-[180px] -left-16 line-10 border-b border-l rounded-bl-2xl border-primary" />
                <span className="absolute -left-16 line-11 border-t border-r rounded-tr-2xl border-primary" />
              </div>
              <a href={MO_ALI_LINKEDIN_URL} className="w-full relative overflow-hidden border-primary border rounded-full aspect-square">
                <Image src="/images/team/1.jpg" alt="member 1" fill />
              </a>
              <div className="w-0 relative hidden md:block">
                <span className="absolute w-20 border-t border-primary h-0 top-1/2" />
              </div>
            </div>
            <p className="text-2xl text-primary mt-8">Dr Mohammed Ali</p>
            <p className="text-2xl text-white mt-1.5">CEO</p>
            {/* <p className="text-2xl text-gray-400 mt-1.5">Linkedin</p> */}
          </div>
          <div className="w-full lg:w-1/3 mb-8">
            <div className="w-full relative flex">
              <a href={LUSIPH_LINKEDIN_URL} className="w-full relative overflow-hidden border-primary border rounded-full aspect-square">
                <Image src="/images/team/2.jpg" alt="member 2" fill />
              </a>
              <div className="w-0 relative hidden md:block">
                <span className="absolute w-20 border-t border-primary h-0 top-1/2" />
              </div>
            </div>
            <p className="text-2xl text-primary mt-8">lusiph Eiubovi</p>
            <p className="text-2xl text-white mt-1.5">CSO</p>
            {/* <p className="text-2xl text-gray-400 mt-1.5">Linkedin</p> */}
          </div>
          <div className="w-full lg:w-1/3 mb-8">
            <div className="w-full relative flex">
              <a href={STEVE_LINKEDIN_URL} className="w-full relative overflow-hidden border-primary border rounded-full aspect-square">
                <Image src="/images/team/3.jpg" alt="member 2" fill />
              </a>
              <div className="w-0 relative hidden lg:block">
                <span className="absolute w-16 h-[180px] border-t border-r rounded-tr-2xl border-primary top-1/2" />
                <span className="absolute left-16 line-9 -ml-[1px] border-b border-l rounded-bl-2xl border-primary" />
              </div>
            </div>
            <p className="text-2xl text-primary mt-8">Prof. Steve Evans</p>
            <p className="text-2xl text-white mt-1.5">Technical Advisor</p>
            {/* <p className="text-2xl text-gray-400 mt-1.5">Linkedin</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
