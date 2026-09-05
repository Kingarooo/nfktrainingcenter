// Coaches for each modality
export const kickboxingCoach = {
  "Geral": "Filipe Albergaria",
  "Iniciados": "Filipe Albergaria",
  "Avançados / Competição": "Filipe Albergaria",
  "Funcional": "Filipe Albergaria",
  "Treino de Saco": "Filipe Albergaria",
  "Sparring": "Filipe Albergaria"
};

export const karateCoach = {
  "Karaté Adultos": "Pedro Paiva",
  "Karaté Kids": "Pedro Paiva",
};

export const jiujitsuCoach = {
  "Jiu Jitsu": "Marco Antonio (Marcão)"
};

// Weekly schedule for Kickboxing & Muaythai, organized by training level
export const weeklySchedule = {
  "Segunda-feira": [
    { time: "07:00 - 08:00", class: "Geral" },
    { time: "18:00 - 19:00", class: "Iniciados" },
    { time: "19:00 - 20:00", class: "Avançados / Competição" }
  ],
  "Terça-feira": [
    { time: "18:00 - 19:00", class: "Funcional" },
    { time: "19:00 - 20:30", class: "Geral" }
  ],
  "Quarta-feira": [
    { time: "07:00 - 08:00", class: "Geral" },
    { time: "18:00 - 19:00", class: "Iniciados" },
    { time: "19:00 - 20:00", class: "Avançados / Competição" }
  ],
  "Quinta-feira": [
    { time: "18:00 - 19:00", class: "Funcional" },
    { time: "19:00 - 20:30", class: "Geral" }
  ],
  "Sexta-feira": [
    { time: "07:00 - 08:00", class: "Geral" },
    { time: "18:00 - 19:00", class: "Treino de Saco" },
    { time: "19:00 - 20:30", class: "Geral" }
  ],
  "Sábado": [
    { time: "11:00 - 12:00", class: "Sparring" }
  ],
  "Domingo": [
    { time: "Descanso", class: "Até os guerreiros merecem descanso" }
  ]
};

// Legacy schedules for backwards compatibility
export const kickboxingSchedule = {
  Segunda: [
    { time: "07:00 - 08:00", class: "Geral" },
    { time: "18:00 - 19:00", class: "Iniciados" },
    { time: "19:00 - 20:00", class: "Avançados / Competição" }
  ],
  Terça: [
    { time: "18:00 - 19:00", class: "Funcional" },
    { time: "19:00 - 20:30", class: "Geral" }
  ],
  Quarta: [
    { time: "07:00 - 08:00", class: "Geral" },
    { time: "18:00 - 19:00", class: "Iniciados" },
    { time: "19:00 - 20:00", class: "Avançados / Competição" }
  ],
  Quinta: [
    { time: "18:00 - 19:00", class: "Funcional" },
    { time: "19:00 - 20:30", class: "Geral" }
  ],
  Sexta: [
    { time: "07:00 - 08:00", class: "Geral" },
    { time: "18:00 - 19:00", class: "Treino de Saco" },
    { time: "19:00 - 20:30", class: "Geral" }
  ],
  Sábado: [
    { time: "11:00 - 12:00", class: "Sparring" }
  ],
  Domingo: [
    { time: "Descanso", class: "Até os guerreiros merecem descanso" }
  ]
};

export const karateSchedule = {
  Segunda: [{ time: "18:00", class: "Karaté Kids" }, { time: "19:00", class: "Karaté Adultos" }],
  Quarta: [{ time: "18:00", class: "Karaté Kids" }, { time: "19:00", class: "Karaté Adultos" }],
  Sábado: [
    { time: "11:00", class: "Karaté Kids" },
    { time: "12:00", class: "Karaté Adultos" }
  ],
  Domingo: [{ time: "Descanso", class: "Até os guerreiros merecem descanso" }]
};

export const bjjSchedule = {
  Segunda: [{ time: "12:00", class: "Jiu Jitsu" }, { time: "20:00", class: "Jiu Jitsu" }],
  Terça: [{ time: "20:00", class: "Jiu Jitsu" }],
  Quarta: [{ time: "12:00", class: "Jiu Jitsu" }, { time: "20:00", class: "Jiu Jitsu" }],
  Quinta: [{ time: "20:00", class: "Jiu Jitsu" }],
  Sexta: [
    { time: "12:00", class: "Jiu Jitsu" },
    { time: "20:00", class: "Jiu Jitsu" }
  ],
  Sábado: [{ time: "12:00", class: "Jiu Jitsu" }],
  Domingo: [{ time: "Descanso", class: "Até os guerreiros merecem descanso" }]
};

