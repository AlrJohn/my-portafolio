// src/data/experience.js
// Experience timeline for Jonathan Alavez Reyes

export const experience = [
  {
    id: "jlg-2025",
    role: "AI Engineering Intern",
    org: "JLG Industries",
    location: "Remote / Hybrid",
    start: "2025-06",     // Summer 2025
    end: null,
    current: true,
    bullets: [
      "Built an LLM interface over 200k+ support transcripts to accelerate knowledge writing.",
      "Implemented semantic search using embeddings and clustering.",
    ],
    tags: ["Internship", "AI", "LLMs", "Semantic Search"]
  },

    {
    id: "sga-2025",
    role: "Vice-President",
    org: "Student Government Association",
    location: "Abington, PA",
    start: "2025-05",
    end: null,
    current: true,
    bullets: [
      "Managed 6 directors and aided in their committees' tasks.",
      "Led senate meetings for 45+ senate members",
      "Mastered Robert's rules for communicating during senate meetings"
    ],
    tags: ["Leadership", "Community", "Campus Impact"]
  },

  {
    id: "research-assistant-2024",
    role: "Research Assistant",
    org: "Penn State Abington",
    location: "Abington, PA",
    start: "2024-01",
    end: "2025-05",
    current: false,
    bullets: [
      "Conducted research on visibility graphs for human order-picking paths.",
      "Designed and prepared a human study to validate graph efficiency.",
    ],
    tags: ["Research", "Graphs", "Human-Centered AI"]
  },

  {
    id: "pa-ang-2022",
    role: "Sergeant (E-5), 1st Squad Leader",
    org: "Pennsylvania Army National Guard",
    location: "King of Prussia, PA",
    start: "2022-01",
    end: null,
    current: true,
    bullets: [
      "Lead a 13-soldier squad; coordinate training and readiness.",
      "Completed 7 months of training; strengthened discipline and accountability.",
      "Built leadership, teamwork, and respect under pressure."
    ],
    tags: ["Leadership", "Team Coordination", "Time Management"]
  },
  {
    id: "global-programs-2024",
    role: "Peer Mentor",
    org: "Penn State Abington • Global Programs",
    location: "Abington, PA",
    start: "2024-04",
    end: null,
    current: true,
    bullets: [
      "Supported International Student Welcome for 150+ incoming students.",
      "Collaborated with a team of 11 peer mentors over a 3-week program.",
      "Mentored 8 students in ENGL 83S; built strong relationships with supervisors and peers."
    ],
    tags: ["Mentorship", "Event Support", "Student Success"]
  },
  {
    id: "cpd-2024",
    role: "Peer Career Advisor",
    org: "Penn State Abington • Career & Professional Development",
    location: "Abington, PA",
    start: "2024-04",
    end: "2025-05",
    current: false,
    bullets: [
      "Promoted student use of career resources; office support with 6 Career Advisors.",
      "Helped organize and run 3 major CPD events; delivered 2 classroom visits.",
      "Guided students on opportunities and campus career services."
    ],
    tags: ["Career Services", "Public Speaking", "Event Operations"]
  },

  // ——— Research ———
  {
    id: "acura-robotics-2023",
    role: "Undergraduate Researcher — Robotics",
    org: "ACURA (Abington College Undergraduate Research Activities)",
    location: "Abington, PA",
    start: "2023-10",
    end: "2024-10",
    current: false,
    bullets: [
      "Built a ROS robot with two cameras, a LiDAR, and a Raspberry Pi.",
      "Implemented autonomous navigation and obstacle avoidance.",
      "Applied ML for object detection on robot camera streams."
    ],
    tags: ["ROS", "Computer Vision", "Embedded Systems", "Python"]
  },
  {
    id: "acura-ai-self-efficacy-2024",
    role: "Undergraduate Researcher — AI & Self-Efficacy",
    org: "ACURA (Abington College Undergraduate Research Activities)",
    location: "Abington, PA",
    start: "2024-10",
    end: "2025-05",
    current: false,
    bullets: [
      "Designed a 25-item survey on AI use and self-efficacy.",
      "Analyzed data with Pearson correlation, ANCOVA, regression, and chi-square.",
      "Completed CITI training; ensured compliant human-subjects research."
    ],
    tags: ["Research Methods", "Statistics", "Survey Design", "Ethics"]
  },

  // ——— Leadership & Organizations ———
  {
    id: "sga-2024",
    role: "Director of Educational Equity",
    org: "Student Government Association (PSU Abington)",
    location: "Abington, PA",
    start: "2024-08",
    end: "2025-05",
    current: false,
    bullets: [
      "Led a team of 5 senators to develop legislation.",
      "Collaborated with 6 directors to drive campus-wide initiatives.",
      "Practiced formal procedures using Robert's Rules of Order."
    ],
    tags: ["Leadership", "Policy", "Campus Impact"]
  },
  {
    id: "integrity-committee-2024",
    role: "Student Representative",
    org: "Abington Academic Integrity Committee",
    location: "Abington, PA",
    start: "2024-08",
    end: null,
    current: true,
    bullets: [
      "Worked with a 13-member committee on academic integrity claims.",
      "Learned university processes for integrity violations.",
      "Strengthened responsibility, duty, and fairness."
    ],
    tags: ["Governance", "Ethics", "Committee Work"]
  },
  {
    id: "lso-2023",
    role: "Event Coordinator",
    org: "Latine Student Organization",
    location: "Abington, PA",
    start: "2023-10",
    end: "2025-05",
    current: false,
    bullets: [
      "Coordinated 15+ cultural events averaging 75 attendees.",
      "Planned logistics and execution to ensure smooth events.",
      "Deepened cultural awareness and community engagement."
    ],
    tags: ["Event Planning", "Community", "Culture"]
  },

  {
    id: "css-2024",
    role: "Vice-President",
    org: "Abington Computer Science Society",
    location: "Abington, PA",
    start: "2024-08",
    end: "2025-05",
    current: false,
    bullets: [
      "Managed 7 club members; advanced leadership and coordination.",
      "Co-planned 3 CS events in Fall 2024.",
      "Networked with 100+ CS faculty and students."
    ],
    tags: ["Leadership", "Community", "Programming"]
  }


];

// Helper to sort newest → oldest
export function sortExperiences(list = experience) {
  const toNum = (s) => (s ? Number(s.replace("-", "")) : 999999);
  return [...list].sort((a, b) => {
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;
    const aEnd = toNum(a.end);
    const bEnd = toNum(b.end);
    if (bEnd !== aEnd) return bEnd - aEnd;
    return toNum(b.start) - toNum(a.start);
  });
}
