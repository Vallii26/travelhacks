import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { FaHome, FaPlane } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";

const Budget = () => {
  return (
    <div>
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
    </div>
  );
};

export default Budget;
