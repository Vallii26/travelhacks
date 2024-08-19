"use client";

import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import PopUpSelect from "@/components/ui/PopUpSelect";
import citiesData from "@/components/cities.json";
import { DatePickerWithRange } from "@/components/ui/datePicker";
import ActivitySelect from "@/components/ui/ActivitySelect";
import Image from "next/image";
import NumericInput from "@/components/ui/NumericalInput";
import RelationSelect from "@/components/ui/RelationSelect";
import { FaHome, FaPlane } from "react-icons/fa";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Modal } from "@/components/ui/animated-modal";
import { AnimatedModalDemo } from "@/components/ui/modal";
import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";

const cities = citiesData.map(({ city, country }) => ({
  value: `${city.toLowerCase()}, ${country.toLowerCase()}`,
  label: `${city}, ${country}`,
}));

const Itineraries = () => {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [number, setNumber] = useState<number>(1);

  // Function to handle the city selection
  const handleCitySelect = (city: string | null) => {
    setSelectedCity(city);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleActivitySelect = (activity: string | null) => {
    setSelectedActivity(activity);
  };

  // Determine visible options based on number of travellers
  const getVisibleRelationOptions = (num: number) => {
    if (num <= 1) return [];
    if (num === 2) return ["couple", "family", "friends"];
    return ["family", "friends"];
  };

  return (
    <div className="min-h-screen flex flex-col text-accent">
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
      <div className="relative text-white font-bold leading-snug tracking-wide">
        <header className="mt-10 text-center py-8 mb-5">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-7xl"
            words="Create Custom Itineraries"
            selectedIndex={1}
          />
          <TextGenerateEffect
            className="text-center text-[20px] md:text-xl lg:text-2xl"
            words="Get tailor-made travel plans that suit your interests and budget."
            duration={2}
            selectedIndex={3}
          />
        </header>
        <div className="mx-auto max-w-[600px]">
          <h1 className="text-center text-xl text-accent mb-4 flex items-center justify-center">
            Select a City
            <svg
              className="ml-2 text-primary"
              height="24"
              width="24"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="currentColor"
                d="M9 4L9 21L18 21L18 27L23 27L23 4L9 4 z M 12.859375 8L14.900391 8L14.900391 10.015625L12.859375 10.015625L12.859375 8 z M 16.900391 8L18.859375 8L18.859375 10.015625L16.900391 10.015625L16.900391 8 z M 34 8L34 46L40.039062 46L40.039062 41.992188L42 41.992188L42 46L48 46L48 8L34 8 z M 12.859375 11.984375L14.900391 11.984375L14.900391 14L12.859375 14L12.859375 11.984375 z M 16.900391 11.984375L18.859375 11.984375L18.859375 14L16.900391 14L16.900391 11.984375 z M 42 11.992188L44 11.992188L44 14.007812L42 14.007812L42 11.992188 z M 38 12.007812L40 12.007812L40 14.021484L38 14.021484L38 12.007812 z M 37.960938 16L40 16L40 18.015625L37.960938 18.015625L37.960938 16 z M 42 16L44 16L44 18.015625L42 18.015625L42 16 z M 37.960938 19.984375L40 19.984375L40 22L37.960938 22L37.960938 19.984375 z M 42 19.984375L44 19.984375L44 22L42 22L42 19.984375 z M 2 22.992188L2 46L8 46L8 41.992188L10 42L10 46L16 46L16 22.992188L2 22.992188 z M 37.960938 23.992188L40 23.992188L40 26.007812L37.960938 26.007812L37.960938 23.992188 z M 42 23.992188L44 23.992188L44 26.007812L42 26.007812L42 23.992188 z M 6 25.992188L8.0390625 25.992188L8.0390625 28.007812L6 28.007812L6 25.992188 z M 10 25.992188L12 25.992188L12 28.007812L10 28.007812L10 25.992188 z M 37.960938 27.976562L40 27.976562L40 29.992188L37.960938 29.992188L37.960938 27.976562 z M 42 27.976562L44 27.976562L44 29.992188L42 29.992188L42 27.976562 z M 18 29L18 46L24 46L24.039062 41.992188L26 41.992188L26 46L32 46L32 29L18 29 z M 6 29.976562L8.0390625 29.976562L8.0390625 31.992188L6 31.992188L6 29.976562 z M 10 29.976562L12 29.976562L12 31.992188L10 31.992188L10 29.976562 z M 38 31.984375L40.039062 31.984375L40.039062 34L38 34L38 31.984375 z M 42 31.984375L44 31.984375L44 34L42 34L42 31.984375 z M 22 32L24 32L24 34.015625L22 34.015625L22 32 z M 26.039062 32.007812L28 32.007812L28 34.021484L26.039062 34.021484L26.039062 32.007812 z M 6 33.992188L8.0390625 33.992188L8.0390625 36.007812L6 36.007812L6 33.992188 z M 10 33.992188L12 33.992188L12 36.007812L10 36.007812L10 33.992188 z M 37.960938 35.984375L40 35.984375L40 38L37.960938 38L37.960938 35.984375 z M 42 35.984375L44 35.984375L44 38L42 38L42 35.984375 z M 26.039062 35.992188L28 35.992188L28 38.007812L26.039062 38.007812L26.039062 35.992188 z M 22 36L24 36L24 38.015625L22 38.015625L22 36 z"
              />
            </svg>
          </h1>
          <PopUpSelect cities={cities} onSelect={handleCitySelect} />

          {/* Date Picker */}
          {selectedCity && (
            <>
              <h1 className="text-center text-xl text-accent mb-4 flex items-center justify-center">
                Select Dates
                <svg
                  className="ml-2 text-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z"
                    fill="currentColor"
                  />
                </svg>
              </h1>
              <div className="text-black">
                <DatePickerWithRange onSelect={handleDateSelect} />
              </div>
            </>
          )}

          {/* Activity Selection */}
          {selectedDate && (
            <>
              <h1 className="text-center text-xl text-accent mb-4 flex items-center justify-center">
                Select Types of Activities
                <Image
                  className="ml-2"
                  src="/assets/compass.svg"
                  height={20}
                  width={20}
                  alt="artCulture"
                />
              </h1>
              <div>
                <ActivitySelect onSelect={handleActivitySelect} />
              </div>
            </>
          )}

          {/* Number of Travellers */}
          {selectedActivity && (
            <>
              <h1 className="text-center text-xl text-accent mb-4 flex items-center justify-center">
                How many are travelling?
                <Image
                  className="ml-2"
                  src="/assets/traveler.svg"
                  height={20}
                  width={20}
                  alt="traveler"
                />
              </h1>
              <NumericInput value={number} onChange={setNumber} />
              {number > 1 && (
                <>
                  <h1 className="text-center text-xl text-accent mb-4 flex items-center justify-center">
                    Select Relationship
                    <Image
                      className="ml-2"
                      src="/assets/relation.svg"
                      height={30}
                      width={30}
                      alt="relation"
                    />
                  </h1>
                  <RelationSelect
                    visibleOptions={getVisibleRelationOptions(number)}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
      <div className="bottom-4 right-4">
        <AnimatedModalDemo />
      </div>
    </div>
  );
};

export default Itineraries;
