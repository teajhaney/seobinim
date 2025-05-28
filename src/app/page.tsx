import { NavigationBar, Hero, Service, Projects, Tools, Footer, Contacts } from '@/component';

import React from 'react';

const page = () => {
  return (
    <main className="relative">
      <NavigationBar />

      <Hero />
      <Service />
      <Projects />
      <Tools />
      <Contacts />
      <Footer />
    </main>
  );
};

export default page;
