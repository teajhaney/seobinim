import { links } from "@/constant";
import { link } from "fs";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="   h-[600px]  lg:h-screen bg-[url('/images/dev.jpg')] bg-cover bg-center thin-border-b">
      <div className="pt-32 pb-10  bg-black/60 h-full">
        <div className="contentMargin flexcol-center h-full space-y-5 text-text text-center">
          <h1 className="font-bold text-4xl lg:text-6xl">
            Creative Software Developer
          </h1>
          <div className="space-y-5 md:w-[500px]">
            <h2 className="font-bold text-lg lg:text-2xl ">
              I craft reliable, scalable products with user experience at the
              forefront.
            </h2>
            <h2 className="font-mono text-sm lg:text-lg">
              I’m <strong>Yusuf Tijani</strong> — a self-taught developer with
              over a year of experience, building real-world solutions. I
              currently specialize in web development, with a strong focus on
              performance and usability.
            </h2>
          </div>
          <div className="flex gap-2 text-secondary">
            {links.map(({ icon: Icon, link }, index) => (
              <Link key={index} href={link} target="_blank">
                <div className="h-8 w-8 thin-border rounded-lg flex items-center justify-center">
                  <Icon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
