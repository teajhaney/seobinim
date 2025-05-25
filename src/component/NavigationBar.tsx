"use client";
import React from "react";
import { Button } from "@/component";
import { IoIosArrowRoundUp } from "react-icons/io";
import { navigationItems } from "@/constant";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <nav className="fixed top-0 left-0 h-20 shadow border-b border-secondary bg-background w-full">
      <div className="h-full contentMargin flex items-center justify-between">
        <h1
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector(
              `#${navigationItems[0].items.toLocaleLowerCase()}`
            );
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-black text-xl text-secondary">
          Seobinim
        </h1>
        <ul className="h-full flex items-center gap-5 max-md:hidden">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <Link
                href={`${item.items.toLocaleLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(
                    `#${item.items.toLocaleLowerCase()}`
                  );
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-secondary font-medium text-lg cursor-pointer hover:underline hover:decoration-secondary">
                {item.items}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          onclick={() => {}}
          className="px-5 py-3 rounded-sm flex-center font-medium text-sm gap-2">
          {" "}
          <p>HIRE ME</p>
          <IoIosArrowRoundUp className="rotate-z-45" />
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;
