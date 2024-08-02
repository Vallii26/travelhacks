import React from "react";
import Navbar from "@/components/ui/Navbar";

const Insights = () => {
  return (
    <div className="min-h-screen flex flex-col text-accent animated-bg">
      <Navbar />
      <header className="mt-10 text-center py-8 text-accent mb-20">
        <h1 className="text-7xl text-primary">Local Insights</h1>
        <p className="text-xl">
          Explore recommendations from locals and seasoned travelers.
        </p>
      </header>
    </div>
  );
};

export default Insights;
