import { NavigationBar, Hero, Service, Projects, Tools } from "@/component";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <NavigationBar />
      <Hero />
      <Service />
		  <Projects />
		  <Tools />
    </main>
  );
};

export default page;
