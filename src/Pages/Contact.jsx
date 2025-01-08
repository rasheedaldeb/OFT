import { Helmet } from "react-helmet-async";
import ContactSection from "../Components/ContactSection/ContactSection";
import PagesHero from "../Components/PagesHero/PagesHero";
import Slogin from "../Components/Slogin/Slogin";
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>OFT | Contact</title>
        <meta
          name="description"
          content="Get in touch with our expert financial advisors to discuss your financial needs and goals. Our team is here to provide personalized support and guidance. Contact us today to start your journey towards financial success. Your future begins with a conversation."
        />
      </Helmet>
      <PagesHero
        title="Let's Connect"
        subtitle="Contact Us"
        slogin="We're here to help! Contact us with any questions, feedback, or support needs. Your voice matters to us!"
      />
      <ContactSection />
      <Slogin />
    </div>
  );
};

export default Contact;
