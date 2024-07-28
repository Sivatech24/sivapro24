"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Stay In Connected
        </h1><br></br>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          For Contact Email
        </p>
        <input
          type="text"
          placeholder="sivatech24@gmail.com"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default BackgroundBeamsDemo;