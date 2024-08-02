import React from "react";
import { cn } from "@/lib/utils";

interface NumericInputProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChange,
  className,
  ...props
}) => {
  const minValue = 1; // Set the minimum value
  const maxValue = 50; // Set the maximum value

  // Determine the label text based on value
  const displayText = value === minValue ? "1 Person" : `${value} People`;

  const incrementValue = () => {
    onChange((prevValue: number) => Math.min(maxValue, prevValue + 1));
  };

  const decrementValue = () => {
    onChange((prevValue: number) => Math.max(minValue, prevValue - 1));
  };

  return (
    <div className="flex items-center justify-center space-x-2 mb-7">
      <button
        type="button"
        onClick={decrementValue}
        className="text-black bg-gray-100 hover:bg-primary hover:text-white p-2 rounded"
      >
        -
      </button>
      <div
        className={cn(
          "flex items-center justify-center text-black bg-white border border-gray-300 rounded p-2 w-[200px]",
          className
        )}
        {...props}
      >
        {displayText}
      </div>
      <button
        type="button"
        onClick={incrementValue}
        className="text-black bg-gray-100 hover:bg-primary hover:text-white p-2 rounded"
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
