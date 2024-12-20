import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Services = lazy(() => import("./Pages/Services"));
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading";
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
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
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
