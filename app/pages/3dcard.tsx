"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  const cards = [
    {
      title: "Unreal Engine 5.3.2 Tutorial: Designing a Medieval Environment in 90 Minutes.",
      description: "we embark on an exhilarating journey through the intricate process of designing a captivating Medieval environment within the confines of just 90 minutes.",
      imageUrl: "https://github.com/Sivatech24/sivapro24/blob/main/Images/UnrealEngine5/main2.0003.png?raw=true",//https://gdurl.com/VWn8
      link: "https://codingmaster24.blogspot.com/2024/03/unreal-engine-532-tutorial-designing.html",
      buttonText: "Explore now",
    },
    {
      title: "Unreal Engine 5 Tutorial: Designing a Castle Environment.",
      description: "In this comprehensive Unreal Engine 5 tutorial, we embark on an exhilarating journey through the intricate process of designing a captivating Castle environment.",
      imageUrl: "https://github.com/Sivatech24/sivapro24/blob/main/Images/UnrealEngine5/maxresdefault.jpg?raw=true",//https://gdurl.com/aBIy
      link: "https://codingmaster24.blogspot.com/2024/02/unreal-engine-product-showcase.html",
      buttonText: "Explore now",
    },
    {
      title: "A Stylized Odyssey unreal Engine 5",
      description: "Embark on an exciting adventure into the realm of game development with Unreal Engine 5.This blog post series is mastering the art of stylized asset creation of game design",
      imageUrl: "https://github.com/Sivatech24/sivapro24/blob/main/Images/UnrealEngine5/2.jpeg?raw=true",//https://gdurl.com/OKhA
      link: "https://codingmaster24.blogspot.com/2023/12/crafting-dreams-in-pixels-journey-into.html",
      buttonText: "Explore now",
    }
  ];

  return (
    <div className="relative flex justify-around flex-wrap">
        <h1 className="text-2xl font-semibold text-white dark:text-white top-10">Unreal Engine 5 Projects</h1><br></br><br></br><br></br>
      {cards.map((card, index) => (
        <CardContainer className="inter-var m-4" key={index}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={card.link}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {card.buttonText}
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default ThreeDCardDemo;
