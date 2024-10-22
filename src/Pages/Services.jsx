import MainServices from "../Components/MainServices/MainServices";
import PagesHero from "../Components/PagesHero/PagesHero";
import Provide from "../Components/Provide/Provide";

const Services = () => {
  return (
    <div>
      <PagesHero
        title="Know Everything... We Provide"
        subtitle="Our Services"
        slogin="Identify what sets your financial services apart from others in the industry. Highlight any distinctive qualities, expertise, or specialized services that make you stand out."
      />
      <MainServices img="/images/main-services.jpg" />
      <Provide
        content={[
          {
            title: "Management Audit:",
            desc: "This strategic tool involves an independent and systematic evaluation spanning from the highest echelons of the company to the lower levels. It aims to assess the effectiveness of the current management team, analyze and evaluate the operations of various internal departments, review overall strategies, and scrutinize performance and inventory reports.",
          },
          {
            title: "Audit Management System:",
            desc: "OFT introduce an Audit Management System that significantly enhances companies› capabilities in assessing management effectiveness, managing risks, and ensuring compliance with regulatory requirements.",
          },
          {
            title: "Internal Audit:",
            desc: "Focused on validating the accuracy and validity of information in financial, accounting, and statistical records related to the company›s financial operations, this type of audit aims to ensure compliance with accounting standards and financial controls.",
          },
          {
            title: "Legal Audit:",
            desc: "Addressing legal compliance issues, local legislation, and applicable regulatory requirements, our legal audit aims to verify that the company is adhering to all relevant laws and regulations.",
          },
        ]}
      />
    </div>
  );
};

export default Services;
