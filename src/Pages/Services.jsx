import HowWeWork from "../Components/HowWeWork/HowWeWork";
import MainServices from "../Components/MainServices/MainServices";
import Management from "../Components/Management/Management";
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
      <Management
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
      <Provide
        content={[
          {
            title:
              "Verifying the Authenticity of Documents, Documents, and Data :",
            subtitle:
              "Ensuring the accuracy, correctness, and consistency of provided information is a crucial process. OFT specializes in thoroughly verifying the authenticity of documents, ensuring that the information is reliable and trustworthy.",
          },
          {
            title: "Establishing Companies from Inception to Operation :",
            subtitle:
              "Embarking on the journey of establishing companies involves several pivotal steps. From determining the type of company, choosing an apt name, and locating the company, to navigating through company registration procedures, managing human resources.",
          },
          {
            title: "Management Consulting Services :",
            subtitle:
              "Our management consulting services are designed to aid organizations in enhancing their performance and achieving their goals. These services encompass institutional construction and administrative services, human resources services, financial services.",
          },
          {
            title: "Marketing Services :",
            subtitle:
              "Our marketing services are a comprehensive suite aimed at boosting businesses presence and efficiency. This includes conducting market research and studies, designing and implementing effective marketing campaigns, and enhancing the efficiency of marketing and sales teams. ",
          },
          {
            title:
              "Rehabilitating the Structure of Administrative, Financial, and Operational Processes :",
            subtitle:
              "Our expertise extends to the rehabilitation and restructuring of the administrative, financial, and operational processes of establishments. This involves a series of strategic changes and improvements in financial and administrative operations, aimed at enhancing efficiency. ",
          },
          {
            title: "Public Relations :",
            subtitle:
              "Public relations is a vital activity undertaken by organizational management to introduce the nature of its work to the public. Leveraging various communication and advertising means, public relations aims to implement the organization's vision. This multifaceted activity encompasses diverse tasks,",
          },
          {
            title:
              "Preparing Economic Feasibility and Financial and Accounting Studies:",
            subtitle:
              "These steps involve evaluating the project`s feasibility, profitability, and potential for success or loss. Economic feasibility studies are integral to the initial project design phase.",
          },
        ]}
      />
      <HowWeWork />
    </div>
  );
};

export default Services;
