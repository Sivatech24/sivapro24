"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My recent Projects.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content1 = () => {
  return(
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">Unreal Engine 5.3.2 Tutorial: Designing a Medieval Environment in 90 Minutes.</span>{" "}
      In this comprehensive Unreal Engine 5.3.2 tutorial, we embark on an exhilarating journey through the intricate process of designing a captivating Medieval environment within the confines of just 90 minutes. Prepare to be immersed in a world where creativity knows no bounds as we delve into the intricate details of level design, asset utilization, and workflow optimization.
            </p><br></br>
            <Image
              src="https://github.com/Sivatech24/sivapro24/blob/main/Images/Edit/main2.0003.png?raw=true"//https://gdurl.com/VWn8
              alt="Unreal Engine 5.3.2"
              height="1280"
              width="720"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
  );
};
const Content2 = () => {
  return(
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">Unreal Engine 5 Tutorial: Designing a Castle Environment.</span>{" "}
      In this comprehensive Unreal Engine 5 tutorial, we embark on an exhilarating journey through the intricate process of designing a captivating Castle environment. Prepare to be immersed in a world where creativity knows no bounds as we delve into the intricate details of level design, asset utilization, and workflow optimization.
            </p><br></br>
            <Image
              src="https://github.com/Sivatech24/sivapro24/blob/main/Images/Edit/NewLevelSequence.0000.jpeg?raw=true"//https://gdurl.com/aBIy
              alt="Unreal Engine 5"
              height="1280"
              width="720"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
  );
};
const Content3 = () => {
  return(
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">Flutter Image Gallery App | Building a Stunning UI with Dart and Flutter.</span>{" "}
      Learn how to create a beautiful image gallery app using Flutter and Dart. In this tutorial, well explore the fundamentals of Flutter UI development by building an image gallery with a clean and responsive design. Follow along as we implement a ListView, custom widgets, and display images with associated titles, descriptions, and tags. Enhance your Flutter skills and create visually appealing mobile apps!
            </p><br></br>
            <Image
              src="https://github.com/Sivatech24/sivapro24/raw/main/Images/Edit/maxresdefault%20(1).webp"//https://gdurl.com/F1xK
              alt="Flutter"
              height="1280"
              width="720"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
  );
};
const Content4 = () => {
  return(
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">Carbon Footprint Calculator.</span>{" "}
      Users can calculate their carbon footprint based on various lifestyle factors such as transportation, energy usage, diet, and consumption habits. The app provides personalized recommendations on how to reduce their carbon footprint.
            </p><br></br>
            <Image
              src="https://github.com/Sivatech24/sivapro24/raw/main/Images/Edit/maxresdefault%20(2).webp"//https://gdurl.com/OT2a
              alt="Flutter"
              height="1280"
              width="720"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
  );
};
const Content5 = () => {
  return(
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">Building an Eco-Challenges App with Flutter.</span>{" "}
      In this Flutter app development tutorial, well build an Eco-Challenges App that encourages users to participate in eco-friendly activities. With Flutters UI toolkit, well create a dynamic app where users can explore various eco-challenges and track their progress.
            </p><br></br>
            <Image
              src="https://github.com/Sivatech24/sivapro24/raw/main/Images/Edit/maxresdefault%20(3).webp"//https://gdurl.com/93yV
              alt="Flutter"
              height="1280"
              width="720"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
  );
};
const Content6 = () => {
  return(
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">Flutter App Development For Eco-Friendly Habits for Sustainable Living 🌱.</span>{" "}
      Join the eco-conscious movement today and become a steward of the planet. Together, lets strive towards a more sustainable and environmentally friendly future for generations to come. Remember to like, share, and subscribe for more eco-friendly tips and inspiration. Together, we can make a difference! #EcoFriendly #SustainableLiving #GreenLiving #Environment #EcoTips.
            </p><br></br>
            <Image
              src="https://github.com/Sivatech24/sivapro24/raw/main/Images/Edit/maxresdefault%20(4).webp"//https://gdurl.com/ZKlv
              alt="Flutter"
              height="1280"
              width="720"
              className="md:w-full md:h-full h-full w-full mx-auto object-contain"
            />
          </div>
  );
};

const data = [
  {
    category: "Unreal Engine 5.3.2",
    title: "Designing a Medieval Environment in 90 Minutes",
    src: "https://github.com/Sivatech24/sivapro24/raw/main/Images/Edited/Unreal%20Engine%205.3.2.webp",//https://gdurl.com/Fpik
    content: <Content1 />,
  },
  {
    category: "Unreal Engine 5",
    title: "Creating a Castle in Unreal Engine 5",
    src: "https://github.com/Sivatech24/sivapro24/blob/main/Images/Edited/Unreal%20Engine%205.jpg?raw=true",//https://gdurl.com/CTUe
    content: <Content2 />,
  },
  {
    category: "Flutter",
    title: "Image Gallery App Building a Stunning UI with Dart and Flutter",
    src: "https://github.com/Sivatech24/sivapro24/raw/main/Images/Edited/Image%20Gallery.webp",//https://gdurl.com/tXUx
    content: <Content3 />,
  },

  {
    category: "Flutter",
    title: "Building a Cross-Platform Carbon Footprint Calculator",
    src: "https://github.com/Sivatech24/sivapro24/raw/main/Images/Edited/Carbon%20Footprint.webp",//https://gdurl.com/nZ4F
    content: <Content4 />,
  },
  {
    category: "Flutter",
    title: "Building an Eco-Challenges App",
    src: "https://github.com/Sivatech24/sivapro24/raw/main/Images/Edited/Eco-Challenges.webp",//https://gdurl.com/T_yS
    content: <Content5 />,
  },
  {
    category: "Flutter",
    title: "Green Living Hub: Sustainable Living App",
    src: "https://github.com/Sivatech24/sivapro24/raw/main/Images/Edited/Green%20Living%20Hub.webp",//https://gdurl.com/4ern
    content: <Content6 />,
  },
];

export default AppleCardsCarouselDemo;
