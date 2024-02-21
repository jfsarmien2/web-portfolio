import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Skill from "../components/Skill";
import Education from "../components/Education";
import Experience from "../components/Experience";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Hr />
      <Skill />
      <Hr />
      <Experience />
      <Hr />
      <Education />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>John Sarmiento</title>;
