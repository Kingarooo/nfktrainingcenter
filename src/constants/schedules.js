// Kickboxing schedule with modalities
export const kickboxingCoach = {
  "Kickboxing": "Filipe Albergaria",
  "Boxe": "Filipe Albergaria",
  "Bag Workout": "Filipe Albergaria",
  "Muay Thai": "Andressa"
};

export const karateCoach = {
  "Karaté": "Pedro Paiva",
  "Karaté Kids": "Pedro Paiva"
};

export const bjjCoach = {
  "BJJ": "Marco Antonio Carneiro (Marcão)",
  "BJJ Kids": "Marco Antonio Carneiro (Marcão)"
};

export const kickboxingSchedule = {
  Segunda: [
    { time: "10:30", class: "Bag Workout" },
    { time: "07:00", class: "Kickboxing - Iniciados" },
    { time: "18:30", class: "Kickboxing - Avançados" }
  ],
  Terça: [
    { time: "17:00", class: "Bag Workout" },
    { time: "18:00", class: "Boxe" },
    { time: "13:00", class: "Kickboxing - Iniciados" },
    { time: "19:00", class: "Kickboxing - Intermédios" },
    { time: "20:00", class: "Muay Thai" }
  ],
  Quarta: [
    { time: "10:30", class: "Bag Workout" },
    { time: "18:00", class: "Boxe" },
    { time: "07:00", class: "Kickboxing - Iniciados" },
    { time: "18:30", class: "Kickboxing - Avançados" }
  ],
  Quinta: [
    { time: "17:00", class: "Bag Workout" },
    { time: "18:00", class: "Boxe" },
    { time: "13:00", class: "Kickboxing - Iniciados" },
    { time: "19:00", class: "Kickboxing - Intermédios" },
    { time: "20:00", class: "Muay Thai" }
  ],
  Sexta: [
    { time: "10:30", class: "Bag Workout" },
    { time: "18:00", class: "Boxe" },
    { time: "07:00", class: "Kickboxing - Iniciados" },
    { time: "19:00", class: "Kickboxing - Intermédios" },
    { time: "20:00", class: "Muay Thai" }
  ],
  Sábado: [
    { time: "11:00", class: "Kickboxing - Todos" }
  ],
  Domingo: [
    { time: "Descanso", class: "Até os guerreiros merecem descanso" }
  ]
};

export const karateSchedule = {
  Segunda: [ { time: "19:00", class: "Karaté" } ],
  Quarta: [ { time: "19:00", class: "Karaté" } ],
  Sexta: [ { time: "19:00", class: "Karaté" } ],
  Domingo: [ { time: "Descanso", class: "Até os guerreiros merecem descanso" } ]
};

export const bjjSchedule = {
  Terça: [ { time: "20:00", class: "BJJ" } ],
  Quinta: [ { time: "20:00", class: "BJJ" } ],
  Sábado: [ { time: "10:00", class: "BJJ" } ],
  Domingo: [ { time: "Descanso", class: "Até os guerreiros merecem descanso" } ]
};
