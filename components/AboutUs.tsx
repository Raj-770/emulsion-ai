import { dreamTeam } from "@/constants";

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-[#001B3D] mt-24">
      <div className="gird gird-cols-1 py-10">
        <div className="pl-4 pr-12">
          <div className="gradient-bar" />
          <h1 className="heading">About Us</h1>
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
        </div>
        <div className="grid grid-cols-2">
          {dreamTeam.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center col-span-1"
            >
              <div className="au-gradient-bar" />
              <div className="w-[130px] h-[135px] bg-white rounded-lg mt-5 mb-2"></div>
              <h1 className="heading">{data.name}</h1>
              <p className="font-manrope text-[#81AFDD] text-xs mt-2 mb-10">
                {data.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
