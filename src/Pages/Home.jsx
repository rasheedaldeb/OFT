import Goals from "../Components/Goals/Goals";
import HomeHero from "../Components/HomeHero/HomeHero";
import Slogin from "../Components/Slogin/Slogin";
import Values from "../Components/Values/Values";
import Vision from "../Components/Vision/Vision";
import WhoWeAre from "../Components/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <WhoWeAre />
      <Vision />
      <Goals
        goals={[
          {
            icon: "/public/images/business-proposal (2).png",
            goal: "Providing comprehensive proposals and studies for various projects.",
          },
          {
            icon: "/public/images/investment (1).png",
            goal: "Create safe investment opportunities that exceed all expectations while maintaining the application of all business, ethical and legal standards.",
          },
          {
            icon: "/public/images/network (1).png",
            goal: "Connecting companies internally and externally.",
          },
          {
            icon: "/public/images/requirement (1).png",
            goal: "Providing all requirements for investment projects.",
          },
          {
            icon: "/public/images/planning (1).png",
            goal: "Managing legal and governmental matters for investors",
          },
        ]}
      />
      <Values />
      <Slogin />
    </div>
  );
};

export default Home;
