import { missionData } from "@/constants";

const OurMission = () => {
  return (
    <div id="our-mission" className="bg-[#001B3D] mt-24 relative">
      <div className="blur-left ml-[-24px] mt-[-24px]" />

      <div className=" gird gird-cols-1 py-10 pl-4 pr-12">
        <div className="gradient-bar" />
        <h1 className="heading">Our Mission</h1>
        <p className="text">
          At Emulsion AI, our mission is clear - to empower businesses to
          harness the power of open-source Large Language Models (LLMs) within
          their private or virtual clouds effortlessly. We're dedicated to
          making AI work for you while preserving your data and adhering to
          stringent regulations.
        </p>
        <h1 className="gradient-text font-manrope font-semibold text-2xl mb-12 mt-10 tracking-tight">
          The possibilities are beyond your imagination
        </h1>

        {missionData.map((data, index) => (
          <>
            <div className="gradient-bar" />
            <h1 className="heading">{data.title}</h1>
            <p className="text">{data.desc}</p>
          </>
        ))}
      </div>
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default OurMission;
