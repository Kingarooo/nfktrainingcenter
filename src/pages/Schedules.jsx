import React, { useState } from "react";
import Timetable from "../components/Timetable";
import ActionButton from "../components/ActionButton";
import { kickboxingSchedule, karateSchedule, bjjSchedule } from "../constants/schedules";

// Create a separate schedule for Boxing and Bag Workout
const boxingSchedule = {
  Segunda: [
    { time: "10:30", class: "Bag Workout" }
  ],
  Terça: [
    { time: "18:00", class: "Kickboxing/Muaythai Kids, Boxe" }
  ],
  Quarta: [
    { time: "10:30", class: "Bag Workout" }
  ],
  Quinta: [
    { time: "18:00", class: "Boxe" }
  ],
  Sexta: [
    { time: "10:30", class: "Bag Workout" },
    { time: "18:00", class: "Kickboxing & Muaythai Kids, Boxe" }
  ],
  Sábado: [],
  Domingo: [
    { time: "Descanso", class: "Até os guerreiros merecem descanso" }
  ]
};

// Update kickboxing schedule to include Muay Thai
const kickboxingMuaythaiSchedule = {
  Segunda: [
    { time: "07:00", class: "Kickboxing" },
    { time: "18:30", class: "Kickboxing" }
  ],
  Terça: [
    { time: "18:00", class: "Kickboxing/Muaythai Kids, Boxe" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" }
  ],
  Quarta: [
    { time: "07:00", class: "Kickboxing" },
    { time: "18:30", class: "Kickboxing" }
  ],
  Quinta: [
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" }
  ],
  Sexta: [
    { time: "07:00", class: "Kickboxing" },
    { time: "18:00", class: "Kickboxing & Muaythai Kids, Boxe" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" }
  ],
  Sábado: [
    { time: "11:00", class: "Kickboxing" }
  ],
  Domingo: [
    { time: "Descanso", class: "Até os guerreiros merecem descanso" }
  ]
};

const scheduleOptions = [
  {
    key: "Kickboxing",
    labels: ["Kickboxing", "Muay Thai"],
    schedule: kickboxingMuaythaiSchedule,
  },
  {
    key: "Boxing",
    labels: ["Boxing", "Bag Workout"],
    schedule: boxingSchedule,
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