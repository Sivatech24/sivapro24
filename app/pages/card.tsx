import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "FlutterToDoListApplication",
    description:
      "FlutterToDoListApplication Creating a Flutter app for a To-Do List involves several steps, including setting up the project.",
    link: "https://github.com/Sivatech24/FlutterToDoListApplication.git",
  },
  {
    title: "GreenLivingHubApp",
    description:
      "Source code for Green Living Hub app, a Flutter application promoting sustainable living and community engagement.",
    link: "https://github.com/Sivatech24/GreenLivingHubApp.git",
  },
  {
    title: "Carbon-Footprint-Calculator",
    description:
      "Flutter App Development For Usage Carbon Footprint Calculator Using Flutter.",
    link: "https://github.com/Sivatech24/Carbon-Footprint-Calculator.git",
  },
  {
    title: "GUI-Calculator",
    description:
      "Flutter App Development For GUI Calculator Using Flutter",
    link: "https://github.com/Sivatech24/GUI-Calculator.git",
  },
  {
    title: "Eco Friendly Habits for Sustainable Living",
    description:
      "Flutter App Development For Eco-Friendly Habits for Sustainable Living 🌱.",
    link: "https://github.com/Sivatech24/Flutter-App-Development-For-Eco-Friendly-Habits-for-Sustainable-Living.git",
  },
  {
    title: "FlutterLiquidSwipeApp",
    description:
      "Flutter App Development For Liquid Swipe App",
    link: "https://github.com/Sivatech24/FlutterLiquidSwipeApp.git",
  },
];

export default CardHoverEffectDemo;