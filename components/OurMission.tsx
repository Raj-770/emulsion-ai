import { missionData } from "@/constants";

const OurMission = () => {
  return (
    <div id="our-mission" className="bg-[#001B3D] mt-28 relative">
      <div className="blur-left ml-[-24px] mt-[-24px]" />

      <div className="grid grid-cols-1 py-10 pl-4 sm:py-16 sm:pl-14 pr-12">
        <div className="sm:grid sm:grid-cols-3">
          <div className="col-span-1">
            <div className="gradient-bar" />
            <h1 className="heading">Our Mission</h1>
          </div>
          <p className="text col-span-2">
            At Emulsion AI, our mission is clear - to empower businesses to
            harness the power of open-source Large Language Models (LLMs) within
            their private or virtual clouds effortlessly. We're dedicated to
            making AI work for you while preserving your data and adhering to
            stringent regulations.
          </p>
        </div>
        <h1 className="gradient-text om-heading">
          The possibilities are beyond your imagination
        </h1>

        <div className="sm:grid sm:grid-cols-3 md:gap-10 sm:gap-5">
          {missionData.map((data, index) => (
            <div className="col-span-1">
              <div className="gradient-bar" />
              <h1 className="heading">{data.title}</h1>
              <p className="text">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default OurMission;
