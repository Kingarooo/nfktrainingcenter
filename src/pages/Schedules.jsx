import React, { useState } from "react";
import Timetable from "../components/Timetable";
import ActionButton from "../components/ActionButton";
import { kickboxingSchedule, karateSchedule, bjjSchedule } from "../constants/schedules";

const scheduleOptions = [
  {
    key: "Kickboxing",
    labels: ["Kickboxing", "Boxing", "Muay Thai", "Bag Workout"],
    schedule: kickboxingSchedule,
  },
  {
    key: "Karaté",
    labels: ["Karaté", "Karaté Kids"],
    schedule: karateSchedule,
  },
  {
    key: "BJJ",
    labels: ["BJJ", "BJJ Kids"],
    schedule: bjjSchedule,
  },
];

const Schedules = () => {
  const [selected, setSelected] = useState("Kickboxing");
  const selectedSchedule = scheduleOptions.find(opt => opt.key === selected)?.schedule;

  return (
    <div className="py-8">
      <div className="flex gap-4 justify-center mb-8 flex-wrap">
        {scheduleOptions.map((option) => (
          <ActionButton
            key={option.key}
            onClick={() => setSelected(option.key)}
            active={selected === option.key}
          >
            {option.labels.map((label, idx) => (
              <span key={idx} className="block leading-tight">{label}</span>
            ))}
          </ActionButton>
        ))}
      </div>
      <Timetable schedule={selectedSchedule} />
    </div>
  );
};

export default Schedules;