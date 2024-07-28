"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Project <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Mobile Application
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`https://gdurl.com/nJrq`}
          alt="Moblie Application Development using flutter"
          height={1920}
          width={1080}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;