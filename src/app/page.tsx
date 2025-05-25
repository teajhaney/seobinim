import {
  NavigationBar,
  Hero,
  Service,
  Projects,
  Tools,
  Footer,
} from "@/component";

import React from "react";

const page = () => {
  return (
    <main className="relative">
      <NavigationBar />

      <Hero />
      <Service />
      <Projects />
      <Tools />
      <Footer />
    </main>
  );
};

export default page;
