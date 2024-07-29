"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/app/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Resume">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://gdurl.com/f5eA/viewer">Resume</HoveredLink>
            <HoveredLink href="mailto:sivatech24@gmail.com">Email</HoveredLink>
            <HoveredLink href="https://github.com/Sivatech24">Github</HoveredLink>
            <HoveredLink href="https://codingmaster24.blogspot.com/">Blog</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Project">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Smart Water Management for Water Quality Monitoring"
              href="https://github.com/Sivatech24/Smartwatermanagmentphase5.git"
              src="https://github.com/Sivatech24/sivapro24/blob/main/Images/NavBar/water_level_sensor.png?raw=true"//https://gdurl.com/7i_s
              description="Developed a smart water management system to enhance water quality and reduce wastage."
            />
            <ProductItem
              title="Flutter App Development For Eco-Friendly Habits for Sustainable Living 🌱"
              href="https://github.com/Sivatech24/Flutter-App-Development-For-Eco-Friendly-Habits-for-Sustainable-Living.git"
              src="https://github.com/Sivatech24/sivapro24/blob/main/Images/NavBar/sustainableliving.png?raw=true"//https://gdurl.com/ZKlv
              description="Join the eco-conscious movement today and become a steward of the planet."
            />
            <ProductItem
              title="Flutter To Do List"
              href="https://github.com/Sivatech24/FlutterToDoListApplication.git"
              src="https://github.com/Sivatech24/sivapro24/blob/main/Images/NavBar/todolist.png?raw=true"//https://gdurl.com/nJrq
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Unreal Engine 5 Tutorial: Designing a Castle Environment"
              href="https://codingmaster24.blogspot.com/2023/12/mastering-unreal-engine-5-stylized.html"
              src="https://github.com/Sivatech24/sivapro24/blob/main/Images/NavBar/unrealenginecastle.jpeg?raw=true"//https://gdurl.com/aBIy
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://codingmaster24.blogspot.com/">Blog</HoveredLink>
            <HoveredLink href="https://github.com/Sivatech24">GitHub</HoveredLink>
            <HoveredLink href="www.linkedin.com/in/sivas24">LinkedIn</HoveredLink>
            <HoveredLink href="https://www.youtube.com/@codingmaster24">Youtube</HoveredLink>
            <HoveredLink href="https://x.com/codingmaster24">Twitter</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;
