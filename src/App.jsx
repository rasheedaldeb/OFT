import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar
        menu={[
          { link: "Home", path: "/" },
          { link: "About", path: "/about" },
          { link: "Services", path: "/services" },
          { link: "Contact", path: "/contact" },
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer
        footerMenu={[
          { link: "Home", path: "/" },
          { link: "About", path: "/about" },
        ]}
        footerMenu2={[
          { link: "Services", path: "/services" },
          { link: "Contact", path: "/contact" },
        ]}
      />
    </>
  );
}

export default App;
