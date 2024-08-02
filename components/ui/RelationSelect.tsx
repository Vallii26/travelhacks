import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";

interface RelationSelectProps {
  visibleOptions: string[];
}

const RelationSelect = ({ visibleOptions }: RelationSelectProps) => {
  const options = {
    couple: {
      value: "couple",
      label: "Couple",
      imgSrc: "/assets/heart.svg",
      imgAlt: "couple",
    },
    family: {
      value: "family",
      label: "Family",
      imgSrc: "/assets/family.svg",
      imgAlt: "family",
    },
    friends: {
      value: "friends",
      label: "Friends",
      imgSrc: "/assets/friends.svg",
      imgAlt: "friends",
    },
  };

  return (
    <div>
      <ToggleGroup
        className="flex flex-wrap justify-center gap-4 mb-7"
        type="single"
      >
        {visibleOptions.includes("couple") && (
          <ToggleGroupItem
            className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
            value={options.couple.value}
          >
            <Image
              src={options.couple.imgSrc}
              height={20}
              width={20}
              alt={options.couple.imgAlt}
            />
            {options.couple.label}
          </ToggleGroupItem>
        )}
        {visibleOptions.includes("family") && (
          <ToggleGroupItem
            className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
            value={options.family.value}
          >
            <Image
              src={options.family.imgSrc}
              height={24}
              width={24}
              alt={options.family.imgAlt}
            />
            {options.family.label}
          </ToggleGroupItem>
        )}
        {visibleOptions.includes("friends") && (
          <ToggleGroupItem
            className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
            value={options.friends.value}
          >
            <Image
              src={options.friends.imgSrc}
              height={20}
              width={20}
              alt={options.friends.imgAlt}
            />
            {options.friends.label}
          </ToggleGroupItem>
        )}
      </ToggleGroup>
    </div>
  );
};

export default RelationSelect;
