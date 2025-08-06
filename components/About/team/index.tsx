import Image from "next/image";

const TeamMembers = () => {
  return (
    <section id="TeamMembers" className="overflow-hidden pt-16 md:pt-20 lg:pt-28 relative">
      <div className="container">
        <div className="w-full px-4">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 lg:mb-5 lg:px-8 flex flex-col items-center"
            data-wow-delay=".15s
            "
          >
            <h3 className="text-4xl lg:text-6xl leading-tight font-bold text-center mb-8 z-10">
              <span className="text-primary">Our Team</span>&nbsp;- Make all Circular
            </h3>
            <p className="text-2xl leading-relaxed dark:text-gray-400 text-center">
              Meet our passionate team dedicated to delivering exceptional service and creating the best experience for our customers. Together, we bring expertise, creativity, and commitment to everything we do
            </p>
          </div>
        </div>
        <div className="w-full block md:flex gap-10 text-center mt-10">
          <div className="w-full lg:w-1/3 mb-8">
            <div className="relative w-full overflow-hidden border-primary border rounded-full aspect-square">
              <Image src="/images/team/1.jpg" alt="memeber 1" fill />
            </div>
            <p className="text-2xl text-primary mt-8">Dr Mohammed Ali</p>
            <p className="text-2xl text-white mt-1.5">CEO</p>
            <p className="text-2xl text-gray-400 mt-1.5">Linkedin</p>
          </div>
          <div className="w-full lg:w-1/3 mb-8">
            <div className="relative w-full overflow-hidden border-primary border rounded-full aspect-square">
              <Image src="/images/team/2.jpg" alt="memeber 2" fill />
            </div>
            <p className="text-2xl text-primary mt-8">lusiph Eiubovi</p>
            <p className="text-2xl text-white mt-1.5">CSO</p>
            <p className="text-2xl text-gray-400 mt-1.5">Linkedin</p>
          </div>
          <div className="w-full lg:w-1/3 mb-8">
            <div className="relative w-full overflow-hidden border-primary border rounded-full aspect-square">
              <Image src="/images/team/3.jpg" alt="memeber 3" fill />
            </div>
            <p className="text-2xl text-primary mt-8">Prof. Steve Evans</p>
            <p className="text-2xl text-white mt-1.5">Technical Advisior</p>
            <p className="text-2xl text-gray-400 mt-1.5">Linkedin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
