import ContactSection from "../Components/ContactSection/ContactSection";
import PagesHero from "../Components/PagesHero/PagesHero";
import Slogin from "../Components/Slogin/Slogin";
const Contact = () => {
  return (
    <div>
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
