import React from "react";
import Intro from "../Introduction/introduction";
import AboutMe from "../AboutMe/aboutMe";
import Services from "../Services/services";
import ContactMe from "../ContactMe/contactMe";

// https://github.com/oelbaga/snapscroll-react

function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Services />
      <ContactMe />
    </div>
  );
}

export default Home;
