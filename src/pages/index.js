import * as React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Skill from "../components/Skill";
const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Hr />
      <Skill />
      <Hr />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>John Sarmiento</title>;
