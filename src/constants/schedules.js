// Coaches for each modality
export const kickboxingCoach = {
  "Kickboxing": "Filipe Albergaria",
  "Boxe": "Filipe Albergaria", 
  "Bag Workout": "Filipe Albergaria"
};

export const muaythaiCoach = {
  "Muaythai": "Andressa",
  "Muaythai Kids": "Andressa"
};

export const karateCoach = {
  "Karaté Adultos": "Pedro Paiva",
  "Karaté Kids": "Pedro Paiva",
  "Karaté Mini Kids": "Pedro Paiva"
};

export const jiujitsuCoach = {
  "Jiu Jitsu": "Marco Antonio (Marcão)",
  "Jiu Jitsu Kids": "Marco Antonio (Marcão)"
};

// Weekly schedules based on the images provided
export const weeklySchedule = {
  "Segunda-feira": [
    { time: "07:00", class: "Kickboxing" },
    { time: "10:30", class: "Bag Workout" },
    { time: "12:00", class: "Jiu Jitsu" },
    { time: "18:00", class: "Karaté Kids" },
    { time: "18:30", class: "Kickboxing" },
    { time: "19:00", class: "Karaté Adultos" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  "Terça-feira": [
    { time: "17:30", class: "Jiu Jitsu Kids (4 aos 6 anos)" },
    { time: "18:00", class: "Kickboxing/Muaythai Kids" },
    { time: "18:00", class: "Boxe" },
    { time: "18:30", class: "Jiu Jitsu Kids (7 aos 13 anos)" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  "Quarta-feira": [
    { time: "07:00", class: "Kickboxing" },
    { time: "10:30", class: "Bag Workout" },
    { time: "12:00", class: "Jiu Jitsu" },
    { time: "18:00", class: "Karaté Mini Kids" },
    { time: "18:30", class: "Kickboxing" },
    { time: "19:00", class: "Karaté Adultos" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  "Quinta-feira": [
    { time: "17:30", class: "Jiu Jitsu Kids (4 aos 6 anos)" },
    { time: "18:00", class: "Boxe" },
    { time: "18:30", class: "Jiu Jitsu Kids (7 aos 13 anos)" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  "Sexta-feira": [
    { time: "07:00", class: "Kickboxing" },
    { time: "10:30", class: "Bag Workout" },
    { time: "12:00", class: "Jiu Jitsu" },
    { time: "17:30", class: "Jiu Jitsu Kids (4 aos 6 anos)" },
    { time: "18:00", class: "Kickboxing & Muaythai Kids" },
    { time: "18:00", class: "Boxe" },
    { time: "18:30", class: "Jiu Jitsu Kids (7 aos 13 anos)" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  "Sábado": [
    { time: "09:00", class: "Karaté Adultos" },
    { time: "10:00", class: "Karaté Mini Kids" },
    { time: "11:00", class: "Kickboxing, Karaté Kids" },
    { time: "12:00", class: "Karaté Adultos" }
  ],
  "Domingo": [
    { time: "Descanso", class: "Até os guerreiros merecem descanso" }
  ]
};

// Legacy schedules for backwards compatibility
export const kickboxingSchedule = {
  Segunda: [
    { time: "07:00", class: "Kickboxing" },
    { time: "10:30", class: "Bag Workout" },
    { time: "18:30", class: "Kickboxing" }
  ],
  Terça: [
    { time: "18:00", class: "Kickboxing/Muaythai Kids" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" }
  ],
  Quarta: [
    { time: "07:00", class: "Kickboxing" },
    { time: "10:30", class: "Bag Workout" },
    { time: "18:30", class: "Kickboxing" }
  ],
  Quinta: [
    { time: "18:00", class: "Boxe" },
    { time: "19:00", class: "Kickboxing" },
    { time: "20:00", class: "Muaythai" }
  ],
  Sexta: [
    { time: "07:00", class: "Kickboxing" },
    { time: "10:30", class: "Bag Workout" },
    { time: "18:00", class: "Kickboxing & Muaythai Kids" },
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

export const karateSchedule = {
  Segunda: [{ time: "18:00", class: "Karaté Kids" }, { time: "19:00", class: "Karaté Adultos" }],
  Quarta: [{ time: "18:00", class: "Karaté Mini Kids" }, { time: "19:00", class: "Karaté Adultos" }],
  Sábado: [
    { time: "09:00", class: "Karaté Adultos" },
    { time: "10:00", class: "Karaté Mini Kids" },
    { time: "11:00", class: "Karaté Kids" },
    { time: "12:00", class: "Karaté Adultos" }
  ],
  Domingo: [{ time: "Descanso", class: "Até os guerreiros merecem descanso" }]
};

export const bjjSchedule = {
  Segunda: [{ time: "12:00", class: "Jiu Jitsu" }, { time: "20:00", class: "Jiu Jitsu" }],
  Terça: [
    { time: "17:30", class: "Jiu Jitsu Kids (4 aos 6 anos)" },
    { time: "18:30", class: "Jiu Jitsu Kids (7 aos 13 anos)" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  Quarta: [{ time: "12:00", class: "Jiu Jitsu" }, { time: "20:00", class: "Jiu Jitsu" }],
  Quinta: [
    { time: "17:30", class: "Jiu Jitsu Kids (4 aos 6 anos)" },
    { time: "18:30", class: "Jiu Jitsu Kids (7 aos 13 anos)" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  Sexta: [
    { time: "12:00", class: "Jiu Jitsu" },
    { time: "17:30", class: "Jiu Jitsu Kids (4 aos 6 anos)" },
    { time: "18:30", class: "Jiu Jitsu Kids (7 aos 13 anos)" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  Domingo: [{ time: "Descanso", class: "Até os guerreiros merecem descanso" }]
};
