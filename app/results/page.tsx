"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Results = () => {
  const router = useRouter();
  const { city, date, activity, number, relation } = router.query;

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [numPeople, setNumPeople] = useState<number>(1);
  const [relations, setRelations] = useState<string[]>([]);

  useEffect(() => {
    if (city && date && activity && number && relation) {
      setSelectedCity(city as string);
      setSelectedDate(new Date(date as string));
      setSelectedActivity(activity as string);
      setNumPeople(Number(number));
      setRelations((relation as string).split(","));
    }
  }, [city, date, activity, number, relation]);

  return (
    <div className="min-h-screen flex flex-col text-accent">
      <h1 className="text-center text-xl text-accent mb-4">Results</h1>
      <div className="text-center">
        <p>City: {selectedCity}</p>
        <p>Date: {selectedDate?.toDateString()}</p>
        <p>Activity: {selectedActivity}</p>
        <p>Number of People: {numPeople}</p>
        <p>Relations: {relations.join(", ")}</p>
      </div>
    </div>
  );
};

export default Results;
