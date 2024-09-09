// components/ui/Summary.tsx

import React from "react";

interface SummaryProps {
  city: { value: string; label: string } | null;
  date: Date | null;
  activities: { value: string; label: string }[]; // Change from single to array
  number: number;
  relationshipOptions?: string[]; // Optional relationship options
}

const Summary: React.FC<SummaryProps> = ({
  city,
  date,
  activities,
  number,
  relationshipOptions = [],
}) => {
  // Format the date if it's a valid Date object
  const formattedDate =
    date instanceof Date && !isNaN(date.getTime())
      ? date.toLocaleDateString()
      : "Not selected";

  // Map city and activities labels
  const cityName = city ? city.label : "Not selected";
  const activityNames =
    activities.length > 0
      ? activities.map((a) => a.label).join(", ")
      : "Not selected";

  return (
    <div className="p-4 border border-accent rounded-md bg-white text-black shadow-md">
      <h2 className="text-lg font-bold mb-2">Summary</h2>
      <div className="mb-2">
        <span className="font-semibold">City:</span> {cityName}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Date:</span> {formattedDate}
      </div>
      <div className="mb-2">
        <span className="font-semibold">
          Activity{activities.length > 1 ? "s" : ""}:
        </span>{" "}
        {activityNames}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Number of Travelers:</span> {number}
      </div>
      {relationshipOptions.length > 0 && (
        <div className="mb-2">
          <span className="font-semibold">Relationship Options:</span>{" "}
          {relationshipOptions.join(", ")}
        </div>
      )}
    </div>
  );
};

export default Summary;
