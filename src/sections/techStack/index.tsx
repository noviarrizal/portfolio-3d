import { useGSAP } from "@gsap/react";
// import TechIcon from "../../components/Models/TechLogos";
import TitleHeader from "../../components/TitleHeader";
import { techStackImgs } from "../../constants";
import { gsap } from "gsap";

export interface TechStackIcon {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-fullmd:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="The Skills I Bring to the Table"
        />
        <div className="tech-grid">
          {/* {techStackIcons.map((icon: TechStackIcon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
