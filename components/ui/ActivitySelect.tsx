import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";

interface ActivitySelectProps {
  onSelect: (selectedActivities: string[]) => void;
}

const ActivitySelect: React.FC<ActivitySelectProps> = ({ onSelect }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelectedValues((prevValues) => {
      const newValues = prevValues.includes(value)
        ? prevValues.filter((v) => v !== value)
        : [...prevValues, value];

      onSelect(newValues);
      return newValues;
    });
  };
  return (
    <div>
      <ToggleGroup
        className="flex flex-wrap justify-center gap-4 mb-7"
        type="multiple"
        onValueChange={handleSelect}
      >
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="kidFriendly"
        >
          <Image src="/assets/child.svg" height={20} width={20} alt="child" />
          Kid Friendly
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="artCulture"
        >
          <Image
            src="/assets/art.svg"
            height={20}
            width={20}
            alt="artCulture"
          />
          Art & Culture
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="museums"
        >
          <Image src="/assets/museum.svg" height={20} width={20} alt="museum" />
          Museums
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="shooping"
        >
          <Image
            src="/assets/shooping.svg"
            height={20}
            width={20}
            alt="shooping"
          />
          Shopping
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="outdoorActivities"
        >
          <Image
            src="/assets/outdoor.svg"
            height={20}
            width={20}
            alt="outdoorActivities"
          />
          Outdoor Activities
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="amusementParks"
        >
          <Image
            src="/assets/amusement.svg"
            height={20}
            width={20}
            alt="amusementPark"
          />
          Amusement Parks
        </ToggleGroupItem>
        <ToggleGroupItem
          className="flex items-center bg-white text-black hover:bg-primary hover:text-white gap-2"
          value="historical"
        >
          <Image
            src="/assets/historical.svg"
            height={20}
            width={20}
            alt="historical"
          />
          Historical
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ActivitySelect;
