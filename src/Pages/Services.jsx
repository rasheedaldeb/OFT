import MainServices from "../Components/MainServices/MainServices";
import PagesHero from "../Components/PagesHero/PagesHero";

const Services = () => {
  return (
    <div>
      <PagesHero
        title="Know Everything... We Provide"
        subtitle="Our Services"
        slogin="Identify what sets your financial services apart from others in the industry. Highlight any distinctive qualities, expertise, or specialized services that make you stand out."
      />
      <MainServices img="/images/main-services.jpg" />
    </div>
  );
};

export default Services;
