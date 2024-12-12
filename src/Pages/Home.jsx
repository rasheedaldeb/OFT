import { Helmet } from "react-helmet-async";
import Goals from "../Components/Goals/Goals";
import HomeHero from "../Components/HomeHero/HomeHero";
import Slogin from "../Components/Slogin/Slogin";
import Values from "../Components/Values/Values";
import Vision from "../Components/Vision/Vision";
import WhoWeAre from "../Components/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>OFT | Home</title>
        <meta
          name="description"
          content="Discover expert financial advisory services that guide you towards achieving your financial goals. Our dedicated team provides personalized investment strategies, wealth management, and comprehensive financial planning to ensure your future success. Partner with us for trusted advice and exceptional service."
        />
      </Helmet>
      <HomeHero mainImg="/images/Icon Logo.png" />
      <WhoWeAre mainImg="/images/who.jpg" />
      <Vision mainImg="/images/vision.jpg" />
      <Goals
        mainImg="/images/goal.jpg"
        goals={[
          {
            icon: "/images/business-proposal (2).png",
            goal: "Providing comprehensive proposals and studies for various projects.",
          },
          {
            icon: "/images/investment (1).png",
            goal: "Create safe investment opportunities that exceed all expectations while maintaining the application of all business, ethical and legal standards.",
          },
          {
            icon: "/images/network (1).png",
            goal: "Connecting companies internally and externally.",
          },
          {
            icon: "/images/requirement (1).png",
            goal: "Providing all requirements for investment projects.",
          },
          {
            icon: "/images/planning (1).png",
            goal: "Managing legal and governmental matters for investors",
          },
        ]}
      />
      <Values mainImg="/images/values.jpg" />
      <Slogin />
    </div>
  );
};

export default Home;
