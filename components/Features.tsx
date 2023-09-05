import { featuresData } from "@/constants";

const Features = () => {
  return (
    <div className="features">
      <div className="blur-left ml-[-24px] mt-[-24px]" />
      <h1 className="gradient-text features-heading">
        Empowering Your AI Journey
      </h1>
      <div className="grid grid-cols-2 gap-5">
        {featuresData.map((data, index) => (
          <>
            <div className="my-7">
              <div className="gradient-bar" />
              <h1 className="heading">{data.title}</h1>
            </div>
            <p className="features-text my-6">{data.desc}</p>
          </>
        ))}
      </div>
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default Features;
