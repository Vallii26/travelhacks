import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CityOption {
  value: string;
  label: string;
}

interface PopUpSelectProps {
  cities: CityOption[];
  onSelect: (city: string) => void; // Add the onSelect prop
}

const PopUpSelect: React.FC<PopUpSelectProps> = ({ cities, onSelect }) => {
  // Group cities by country
  const groupedCities = cities.reduce((groups, { label, value }) => {
    const country = label.split(", ")[1];
    if (!groups[country]) {
      groups[country] = [];
    }
    groups[country].push({ value, label });
    return groups;
  }, {} as Record<string, CityOption[]>);

  return (
    <div className="flex justify-center mb-7">
      <Select onValueChange={onSelect}>
        {" "}
        {/* Pass onSelect to Select */}
        <SelectTrigger className="w-[250px] text-black bg-white hover:bg-primary hover:text-white">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent className="text-black bg-white">
          {Object.entries(groupedCities).map(([country, cities]) => (
            <SelectGroup key={country}>
              <SelectLabel className="text-24 bg-primary text-white rounded">
                {country}
              </SelectLabel>
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default PopUpSelect;
