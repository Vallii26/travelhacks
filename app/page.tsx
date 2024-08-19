import { FloatingNav } from "@/components/ui/FloatingNav";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Button from "@/components/ui/buttonSelect";
import { FaHome, FaPlane } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between text-white bg-black overflow-x-hidden">
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 right-0" fill="purple" />
      <Spotlight className="right-20 top-28 h-[80vh] w-[50vw]" fill="blue" />
      <FloatingNav
        navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          {
            name: "Custom Iteneraries",
            link: "/custom-itineraries",
            icon: <FaPlane />,
          },
        ]}
      />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <main className="relative flex flex-col items-center justify-center mt-10">
        <header className="text-center py-8 text-white mb-10">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
            words="Welcome to Travel Hacks"
          />
          <TextGenerateEffect
            className="text-center text-[20px] md:text-xl lg:text-2xl"
            words="Your personalizez AI travel planning assistant"
            duration={2}
            selectedIndex={3}
          />
        </header>
        <section className="mb-8 text-center font-bold leading-snug tracking-wide">
          <h2 className="text-3xl mb-5">Plan Your Next Adventure</h2>
          <p className="text-lg">
            Discover personalized itineraries, hidden gems, and unforgettable
            experiences.
          </p>
        </section>

        <section className="w-full max-w-4xl flex justify-around">
          <Button
            name="Custom Itineraries"
            description="Get tailor-made travel plans that suit your interests and budget."
            route="/custom-itineraries"
          />
          <Button
            name="Local Insights"
            description="Explore recommendations from locals and seasoned travelers."
            route="/local-insights"
          />
          <Button
            name="Budget Management"
            description="Keep track of your spending and stay within your budget."
            route="/budget-management"
          />
        </section>
        <footer className="text-center py-4 bg-black text-accent">
          <p>© 2024 TravelHacks. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
