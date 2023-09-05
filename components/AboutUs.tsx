import { dreamTeam } from "@/constants";

const AboutUs = () => {
  return (
    <div id="about-us" className="relative bg-[#001B3D] mt-24">
      <div className="blur-left ml-[-24px] mt-[-24px]" />
      <div className="gird gird-cols-1 py-10 md:py-16 md:pl-14">
        <div className="pl-4 pr-12">
          <div className="sm:grid sm:grid-cols-3 items-center">
            <div className="col-span-1">
              <div className="gradient-bar" />
              <h1 className="heading">About Us</h1>
            </div>
            <p className="text col-span-2">
              We have spent years scaling start-ups, building out digital
              experiences and working at big tech – including Google, Amazon,
              Fitbit, D2L, Typeform, Lazer, and Redbull.We have spent years
              scaling start-ups, building out digital experiences and working at
              big tech – including Google, Amazon, Fitbit, D2L, Typeform, Lazer,
              and Redbull.
            </p>
          </div>
          <h1 className="gradient-text om-heading">The Dream Team</h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {dreamTeam.map((data, index) => (
            <div key={index} className="au-pic-container">
              <div className="au-gradient-bar md:ml-[40px]" />
              <div className="au-pic"></div>
              <h1 className="au-name">{data.name}</h1>
              <p className="au-role">{data.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="blur-right mr-[-24px]" />
    </div>
  );
};

export default AboutUs;
