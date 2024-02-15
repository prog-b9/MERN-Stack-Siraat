/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import About from "../../components/home/About";
import Brands from "../../components/home/Brands";
import ContactUs from "../../components/home/ContactUs";
import Stats from "../../components/home/Stats";
import Goals from "../../components/home/Goals";
import Landing from "../../components/home/Landing";
import Reviews from "../../components/home/Reviews";
import Services from "../../components/home/Services";
import Clints from "../../components/home/Clints";
import FuncScrollToUp from "../../components/utility/FuncScrollToUp";

const HomePage = ({ refs, scrollToSection }) => {
  FuncScrollToUp();

  return (
    <div>
      <Landing refs={refs} scrollToSection={scrollToSection} />
      <Goals />
      <About />
      <Stats />
      <Services />
      <Clints />
      {/* <Reviews /> */}
      <Brands />
      <div ref={refs[3]}>
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
