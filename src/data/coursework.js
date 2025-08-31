// src/data/coursework.js
// Coursework timeline data built from Jonathan Alavez Reyes' transcript.
// Use sortCoursework() to render newest → oldest. Terms include optional GPA/deanList flags,
// and courses include code, title, credits, grade (if posted), and tags/notes for display.

export const coursework = [
  // ---- Fall 2025 (planned / in-progress) ----
  {
    termId: "2025-fall",
    label: "Fall 2025",
    gpa: null,            // not posted yet
    deanList: false,
    planned: true,
    courses: [
      {
        code: "APLNG 230N",
        title: "Language and Social Justice",
        credits: 3,
        grade: null,
        tags: ["Honors","Humanities","Society"],
        notes: "Honors attribute; in progress"
      },
      {
        code: "CMPSC 312",
        title: "Computer Organization & Architecture",
        credits: 3,
        grade: null,
        tags: ["Systems","Architecture"],
        notes: "In progress"
      },
      {
        code: "CMPSC 330",
        title: "Advanced Programming",
        credits: 3,
        grade: null,
        tags: ["Software","Advanced"],
        notes: "In progress"
      },
      {
        code: "CMPSC 462",
        title: "Data Structures",
        credits: 3,
        grade: null,
        tags: ["CS Core","Algorithms","Data Structures"],
        notes: "In progress"
      },
      {
        code: "CMPSC 469",
        title: "Formal Languages",
        credits: 3,
        grade: null,
        tags: ["Theory","Automata","Computation"],
        notes: "In progress"
      },
      {
        code: "CNED 297",
        title: "Special Topics — SGA",
        credits: 1,
        grade: null,
        tags: ["Leadership","Campus Involvement"],
        notes: "Course topic: SGA; in progress"
      },
      {
        code: "ENGL 202C",
        title: "Technical Writing",
        credits: 3,
        grade: null,
        tags: ["Writing","Communication"],
        notes: "In progress"
      }
    ]
  },

  // ---- Spring 2025 ----
  {
    termId: "2025-spring",
    label: "Spring 2025",
    gpa: 4.00,
    deanList: true,
    planned: false,
    courses: [
      {
        code: "CAS 296",
        title: "Independent Studies",
        credits: 2,
        grade: "A",
        tags: ["Communication","Independent Study"]
      },
      {
        code: "CMPEN 270",
        title: "Digital Design",
        credits: 4,
        grade: "A",
        tags: ["Digital Logic","Hardware","Circuits"]
      },
      {
        code: "CMPSC 360",
        title: "Discrete Mathematics for CS",
        credits: 3,
        grade: "A",
        tags: ["Math","Proofs","Combinatorics","Graphs"]
      },
      {
        code: "COMM 151N",
        title: "Astrobiology in Film",
        credits: 3,
        grade: "A",
        tags: ["Honors","Interdisciplinary"]
      },
      {
        code: "HIST 21",
        title: "American Civilization Since 1877",
        credits: 3,
        grade: "A",
        tags: ["Honors","Humanities","History"]
      },
      {
        code: "MATH 414",
        title: "Introduction to Probability Theory",
        credits: 3,
        grade: "A",
        tags: ["Probability","Statistics","Math"]
      }
    ]
  },

  // ---- Fall 2024 ----
  {
    termId: "2024-fall",
    label: "Fall 2024",
    gpa: 4.00,
    deanList: true,
    planned: false,
    courses: [
      {
        code: "CAS 100A",
        title: "Effective Speech",
        credits: 3,
        grade: "A",
        tags: ["Communication","Public Speaking"]
      },
      {
        code: "CAS 296",
        title: "Independent Studies",
        credits: 1,
        grade: "A",
        tags: ["Communication","Independent Study"]
      },
      {
        code: "CMPSC 221",
        title: "OOP with Web",
        credits: 3,
        grade: "A",
        tags: ["OOP","Web","Java/JS"]
      },
      {
        code: "CNED 200",
        title: "Peer Mentoring",
        credits: 1,
        grade: "A",
        tags: ["Mentorship","Student Success"]
      },
      {
        code: "MATH 220",
        title: "Matrices",
        credits: 3,
        grade: "A",
        tags: ["Linear Algebra","Math"]
      },
      {
        code: "MATH 230",
        title: "Calculus & Vector Analysis",
        credits: 4,
        grade: "A",
        tags: ["Calculus","Multivariable","Math"]
      },
      {
        code: "PHYS 212",
        title: "Electricity and Magnetism",
        credits: 4,
        grade: "A",
        tags: ["Physics","E&M"]
      }
    ]
  },

  // ---- Spring 2024 ----
  {
    termId: "2024-spring",
    label: "Spring 2024",
    gpa: 4.00,
    deanList: true,
    planned: false,
    courses: [
      {
        code: "ARTH 112",
        title: "Renaissance to Modern Art",
        credits: 3,
        grade: "A",
        tags: ["Arts","Humanities"]
      },
      {
        code: "CMPSC 132",
        title: "Programming & Computation II",
        credits: 3,
        grade: "A",
        tags: ["Data Structures","OOP","Python/Java"]
      },
      {
        code: "CMPSC 296",
        title: "Independent Studies",
        credits: 1,
        grade: "A",
        tags: ["CS","Independent Study"]
      },
      {
        code: "ENGL 15",
        title: "Rhetoric and Composition",
        credits: 3,
        grade: "A",
        tags: ["Writing","Communication"]
      },
      {
        code: "MATH 141",
        title: "Calculus II",
        credits: 4,
        grade: "A",
        tags: ["Calculus","Series","Integration"]
      },
      {
        code: "PHYS 211",
        title: "Mechanics",
        credits: 4,
        grade: "A",
        tags: ["Physics","Mechanics"]
      }
    ]
  },

  // ---- Fall 2023 ----
  {
    termId: "2023-fall",
    label: "Fall 2023",
    gpa: 4.00,
    deanList: true,
    planned: false,
    courses: [
      {
        code: "AMST 100",
        title: "Introduction to American Studies",
        credits: 3,
        grade: "A",
        tags: ["Humanities","US Studies"]
      },
      {
        code: "CMPSC 131",
        title: "Programming & Computation I",
        credits: 3,
        grade: "A",
        tags: ["Programming","Foundations","Python/Java"]
      },
      {
        code: "ECON 104",
        title: "Macroeconomic Analysis",
        credits: 3,
        grade: "A",
        tags: ["Economics","Macroeconomics"]
      },
      {
        code: "ENGL 83S",
        title: "First-Year Seminar",
        credits: 3,
        grade: "A",
        tags: ["First-Year Seminar"]
      },
      {
        code: "MATH 140",
        title: "Calculus I",
        credits: 4,
        grade: "A",
        tags: ["Calculus","Differentiation","Math"]
      }
    ]
  }
];

// --- Helpers: term sorting & small utilities ---

export const termOrder = (id) => {
  // convert "YYYY-fall|spring|summer" → numeric key for sorting
  const [y, s] = id.split("-");
  const season = { spring: 1, summer: 2, fall: 3 }[s] ?? 0;
  return Number(y) * 10 + season;
};

export function sortCoursework(list = coursework) {
  // newest → oldest
  return [...list].sort((a, b) => termOrder(b.termId) - termOrder(a.termId));
}
