"use client";

import React, { useEffect, useState } from "react";

interface CityOption {
  value: string;
  label: string;
}

interface PopUpSelectProps {
  onSelect: (city: CityOption) => void;
}

const PopUpSelect: React.FC<PopUpSelectProps> = ({ onSelect }) => {
  const [query, setQuery] = useState<string>("");
  const [cities, setCities] = useState<CityOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCities = async () => {
      if (query.length < 3) return;

      const url = `/api/getCities?query=${query}`;

      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data from API route:", data);
        if (data.status === "OK" && data.predictions) {
          const cityOptions = data.predictions.map((prediction: any) => ({
            value: prediction.place_id,
            label: prediction.description,
          }));
          setCities(cityOptions);
        }
      } catch (error) {
        console.error("Error fetching data from API route:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [query]);

  const handleCityClick = (city: CityOption) => {
    onSelect(city); // Pass selected city to parent component
    setQuery(city.label);
    setCities([]);
  };

  return (
    <div className="flex flex-col items-center mb-7">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city"
        className="w-[250px] p-2 border border-gray-300 rounded"
      />
      {loading && <div>Loading...</div>}
      <ul className="w-[250px] bg-white border border-gray-300 mt-2 rounded max-h-60 overflow-y-auto text-accent">
        {cities.map((city) => (
          <li
            key={city.value}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleCityClick(city)}
          >
            {city.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopUpSelect;
