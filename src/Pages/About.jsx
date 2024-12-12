import { Helmet } from "react-helmet-async";
import AboutUsSection from "../Components/AboutUsSection/AboutUsSection";
import PagesHero from "../Components/PagesHero/PagesHero";
import Slogin from "../Components/Slogin/Slogin";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>OFT | About</title>
        <meta
          name="description"
          content="Learn about our commitment to providing expert financial advisory services tailored to your unique needs. Discover our team's extensive experience, personalized approach, and dedication to helping you achieve your financial goals. Trust us to be your partner in financial success."
        />
      </Helmet>
      <PagesHero
        title="Know Everything... About Us "
        subtitle="About OFT"
        slogin="Identify what sets your financial services apart from others in the industry. Highlight any distinctive qualities, expertise, or specialized services that make you stand out."
      />
      <AboutUsSection
        content={[
          {
            info: "Our team is dedicated to establishing companies and fostering business development by creating comprehensive plans and solutions. OFT specializes in guiding companies through the process of entering the investment market in Syria, offering support from the conceptual stage to the initiation of operations.",
          },
          {
            info: "Our distinctiveness lies in the expertise of our team, which is adept at formulating and executing logistical, commercial, and investment ideas. OFT consistently aim to assemble an elite group spanning various specialties, uniting them within the company entity. This approach facilitates the provision of comprehensive services to investors, addressing their diverse needs.",
          },
          {
            info: "OFT remains committed to the continuous training of its team, adopting a unique corporate management style that seamlessly integrates achieving desired results with set goals, emphasizing integrity and transparency. This commitment reflects our dedication to corporate social responsibility, positioning OFT as a leading company in entrepreneurial endeavors.",
          },
        ]}
        info="OFT is an administrative company specializing in multiple services from consulting and training to auditing and verification. Additionally, OFT provides contributes to the rehabilitation and restructuring of the administrative,financial, and operational processes within establishments. Our scope extends to public relations services, labor consultations, the preparation of economic feasibility studies for projects, and conducting financial and accounting analyses."
      />
      <Slogin />
    </div>
  );
};

export default About;
