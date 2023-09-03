import { featuresData } from "@/constants";

const Features = () => {
  return (
    <div className="relative grid grid-cols-2 items-start mt-24">
      <div className="blur-left ml-[-24px] mt-[-24px]" />

      <h1 className="col-span-2 gradient-text font-manrope font-semibold text-2xl mb-12 mt-10 tracking-tight">
        Empowering Your AI Journey
      </h1>

      {featuresData.map((data, index) => (
        <>
          <div className="col-span-1 my-7">
            <div className="gradient-bar" />
            <h1 className="heading">{data.title}</h1>
          </div>
          <p className="features-text my-6">{data.desc}</p>
        </>
      ))}
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default Features;
