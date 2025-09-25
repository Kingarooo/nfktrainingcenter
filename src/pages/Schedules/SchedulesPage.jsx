import React, { useState } from "react";
import Timetable from "./Timetable";
import ActionButton from "../../components/shared/ActionButton";

const commonSunday = [
  { time: "Descanso", class: "Até os guerreiros merecem descanso" }
];
// Boxing / Boxe schedule
const boxingSchedule = {
  Segunda: [
    { time: "18:00", class: "Boxe" }
  ],
  Terça: [
    { time: "18:00", class: "Boxe" }
  ],
  Quarta: [
    { time: "18:00", class: "Boxe" }
  ],
  Quinta: [
    { time: "18:00", class: "Boxe" }
  ],
  Sexta: [
    { time: "18:00", class: "Boxe" }
  ],
  Sábado: [],
  Domingo: commonSunday
};

// Kickboxing schedule
const kickboxingSchedule = {
  Segunda: [
    { time: "07:00", class: "Kickboxing" },
    { time: "19:00", class: "Kickboxing" }
  ],
  Terça: [
    { time: "19:00", class: "Kickboxing" }
  ],
  Quarta: [
    { time: "07:00", class: "Kickboxing" },
    { time: "19:00", class: "Kickboxing" }
  ],
  Quinta: [
    { time: "19:00", class: "Kickboxing" }
  ],
  Sexta: [
    { time: "07:00", class: "Kickboxing" },
    { time: "19:00", class: "Kickboxing" }
  ],
  Sábado: [
    { time: "11:00", class: "Kickboxing" }
  ],
  Domingo: commonSunday
};

// Muay Thai schedule
const muaythaiSchedule = {
  Segunda: [
    { time: "20:00", class: "Muay Thai" }
  ],
  Terça: [
    { time: "20:00", class: "Muay Thai" }
  ],
  Quarta: [
    { time: "20:00", class: "Muay Thai" }
  ],
  Quinta: [
    { time: "20:00", class: "Muay Thai" }
  ],
  Sexta: [
    { time: "20:00", class: "Muay Thai" }
  ],
  Sábado: [],
  Domingo: commonSunday
};

// Merge Kickboxing then Muay Thai so Muay Thai classes always appear after Kickboxing
// Shared Sunday entry (fixed for all schedules)

const mergeSchedules = (primary = {}, secondary = {}) => {
  const days = Array.from(new Set([...Object.keys(primary), ...Object.keys(secondary)]));
  const merged = {};
  days.forEach(day => {
    const a = primary[day] || [];
    const b = secondary[day] || [];
    merged[day] = [...a, ...b];
  });
  // Enforce a single, shared Domingo entry to avoid duplicates
  merged['Domingo'] = commonSunday;
  return merged;
};

const kickboxingWithMuay = mergeSchedules(kickboxingSchedule, muaythaiSchedule);

// Bag Workout schedule (to be coupled with Boxing)
const bagSchedule = {
  Segunda: [
    { time: "10:30 - 11:15", class: "Bag Workout" }
  ],
  Terça: [],
  Quarta: [
    { time: "10:30 - 11:15", class: "Bag Workout" }
  ],
  Quinta: [],
  Sexta: [
    { time: "10:30 - 11:15", class: "Bag Workout" }
  ],
  Sábado: [],
  Domingo: commonSunday
};

// Merge Boxing with Bag Workout so Bag classes appear alongside Boxe
const boxingWithBag = mergeSchedules(boxingSchedule, bagSchedule);

// Jiu-Jitsu (adultos) schedule
const bjjSchedule = {
  Segunda: [
    { time: "12:00", class: "Jiu-Jitsu" },
    { time: "20:00", class: "Jiu-Jitsu" }
  ],
  Terça: [],
  Quarta: [
    { time: "12:00", class: "Jiu-Jitsu" }
  ],
  Quinta: [],
  Sexta: [
    { time: "12:00", class: "Jiu-Jitsu" },
    { time: "20:00", class: "Jiu-Jitsu" }
  ],
  Sábado: [],
  Domingo: commonSunday
};

// Karate schedules (baby and adults). Karatê Kids entries commented out for now.
const karateSchedule = {
  Segunda: [
    { time: "18:00", class: "Karatê Baby" },
    { time: "19:00", class: "Karatê Adultos" }
  ],
  Terça: [],
  Quarta: [
    { time: "18:00", class: "Karatê Baby" },
    { time: "19:00", class: "Karatê Adultos" }
  ],
  Quinta: [],
  Sexta: [],
  Sábado: [
    { time: "09:00", class: "Karatê Adultos" },
    { time: "10:00", class: "Karatê Baby" }
    // { time: "11:00", class: "Karatê Kids" } // Karatê Kids commented out for now
  ],
  Domingo: commonSunday
};

const scheduleOptions = [
  {
    key: "Kickboxing",
    labels: ["Kickboxing", "Muay Thai"],
    schedule: kickboxingWithMuay,
  },
  {
    key: "Boxing",
    labels: ["Boxe", "Bag Workout"],
    schedule: boxingWithBag,
  },
  {
    key: "Karaté",
    labels: ["Karatê Baby", "Karatê Adultos"],
    schedule: karateSchedule,
  },
  {
    key: "BJJ",
    labels: ["Jiu-Jitsu", "Jiu-Jitsu Kids"],
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
    : {
        [selectedDay]: selectedDay === 'Domingo'
          ? commonSunday
          : (selectedSchedule?.[selectedDay] || [])
      };

  // Check if it's a single day view
  const isSingleDay = selectedDay !== "Toda a Semana";

  return (
    <div className="py-8">
      <div className="text-center mb-8">
          <h2 className="font-bebas text-5xl md:text-6xl mb-4 text-nfk-red">
            HORÁRIOS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-4 text-md">
            TODAS AS AULAS TÊM DURAÇÃO DE 1H
          </p>
        </div>
      <div className="flex gap-4 justify-center mb-4 flex-wrap">
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
      <div className="flex gap-2 justify-center  flex-wrap max-w-4xl mx-auto">
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