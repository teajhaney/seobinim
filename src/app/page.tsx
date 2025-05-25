import { NavigationBar, Hero, Service, Projects } from "@/component";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <NavigationBar />
      <Hero />
      <Service />
      <Projects />
    </main>
  );
};

export default page;
