"use client";
import React from "react";
import { Button } from "@/component";
import { IoIosArrowRoundUp } from "react-icons/io";
import { navigationItems } from "@/constant";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 h-20 custom-shadow  thin-border-b bg-background w-full z-100">
      <div className="h-full contentMargin flex items-center justify-between">
        <a
          href={`#${navigationItems[0].item}`}
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector(
              `#${navigationItems[0].item}`
            );
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}>
          <h1 className="font-black text-xl text-secondary cursor-pointer">
            Seobinim
          </h1>
        </a>
        <ul className="h-full flex items-center gap-5 max-md:hidden">
          {navigationItems.map(({ item, link }, index) => (
            <li key={index}>
              <a
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(`#${link}`);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-secondary font-medium text-lg cursor-pointer hover:underline hover:decoration-secondary">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`#${navigationItems[3].item}`}
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector(
              `#${navigationItems[3].item}`
            );
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}>
          <Button
            onclick={() => {}}
            className="px-5 py-3 rounded-sm flex-center font-medium text-sm gap-2 hover:shadow-[0px_0px_10px_#f68338] cursor-pointer  transition-all duration-300">
            {" "}
            <p>HIRE ME</p>
            <IoIosArrowRoundUp className="rotate-z-45" />
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
