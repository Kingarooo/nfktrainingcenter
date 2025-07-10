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
  const [selectedDay, setSelectedDay] = useState("Toda a Semana");
  const selectedSchedule = scheduleOptions.find(opt => opt.key === selected)?.schedule;

  const dayOptions = [
    "Toda a Semana",
    "Segunda",
    "Terça", 
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo"
  ];

  // Filter schedule based on selected day
  const filteredSchedule = selectedDay === "Toda a Semana" 
    ? selectedSchedule 
    : { [selectedDay]: selectedSchedule?.[selectedDay] || [] };

  // Check if it's a single day view
  const isSingleDay = selectedDay !== "Toda a Semana";

  return (
    <div className="py-8">
      <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
            HORÁRIOS
          </h2>
        </div>
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

      {/* Day Selection */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap max-w-4xl mx-auto">
        {dayOptions.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-bebas text-sm transition-all duration-300 border-2 
              ${selectedDay === day 
                ? 'bg-nfk-red/20 text-nfk-red border-nfk-red shadow-lg shadow-nfk-red/20' 
                : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50'
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      <Timetable 
        schedule={filteredSchedule} 
        isSingleDay={isSingleDay}
        selectedSport={selected}
        selectedDay={selectedDay}
      />
    </div>
  );
};

export default Schedules;