import { publication } from './site.js';

export const professionalExperience = [
  {
    id: 'deloitte-2026',
    role: 'AI Innovation Fellow - CPG Innovation',
    org: 'Deloitte',
    location: 'Philadelphia, PA',
    start: '2026-06',
    end: null,
    current: true,
    bullets: [
      'Migrated a production LLM chat integration to a new framework version across 7 pull requests with zero regressions.',
      'Built full-stack features connecting an AI chat assistant to a concept-generation platform, improving output quality and reliability.',
      'Diagnosed and resolved end-to-end test failures across a React and Python codebase using Playwright.',
      'Authored technical research and documentation adopted by the engineering team.',
    ],
    tags: ['AI', 'FDE', 'React', 'Python', 'FastAPI', 'LangGraph', 'CopilotKit', 'Playwright'],
  },
  {
    id: 'jlg-2025',
    role: 'AI Engineering Intern',
    org: 'JLG Industries',
    location: 'McConnellsburg, PA',
    start: '2025-05',
    end: '2026-05',
    current: false,
    bullets: [
      'Designed a production-level LLM solution to summarize 200,000+ Salesforce call transcripts stored in Databricks.',
      'Engineered GPT-4 prompts that extracted technician troubleshooting patterns and reduced documentation time from 10+ hours to under 1 hour.',
      'Developed a searchable internal interface for knowledge writers and support agents to retrieve GPT-based summaries.',
      'Trained 50+ support technicians to use the system during live calls.',
    ],
    tags: ['OpenAI API', 'Prompt Engineering', 'Python', 'PySpark', 'Databricks', 'SQL', 'Salesforce API', 'Flask'],
  },
  {
    id: 'pa-ang-2022',
    role: 'Sergeant (E-5)',
    org: 'U.S. Pennsylvania Army National Guard',
    location: 'King of Prussia, PA',
    start: '2022-01',
    end: null,
    current: true,
    bullets: [
      'Serve as 1st Squad Leader in charge of 13 soldiers.',
      'Build discipline, accountability, and execution habits in high-responsibility team environments.',
    ],
    tags: ['Leadership', 'Team Coordination', 'Accountability'],
  },
];

export const researchExperience = [
  {
    id: 'editory-ai-2024',
    role: 'Researcher',
    org: 'Editory.AI',
    location: 'Remote / Research Collaboration',
    start: '2024-12',
    end: null,
    current: true,
    bullets: [
      'Focused on prompt engineering and user behavior for LLM-based writing tools.',
      'Co-presented findings at the University of Maryland Research Symposium.',
    ],
    tags: ['LLMs', 'Prompt Engineering', 'User Research'],
  },
  {
    id: 'acura-ai-self-efficacy-2024',
    role: 'Undergraduate Researcher - AI & Self-Efficacy',
    org: 'ACURA, Penn State Abington',
    location: 'Abington, PA',
    start: '2024-10',
    end: null,
    current: true,
    bullets: [
      "Explored AI's effect on students' self-efficacy in communication.",
      'Performed quantitative analysis with Pearson correlation, ANCOVA, and regression.',
      'Published research through IEEE Xplore.',
    ],
    tags: ['Published Research', 'Statistics', 'Communication', 'AI'],
    links: [
      { label: publication.venue, href: publication.href },
    ],
  },
  {
    id: 'acura-robotics-2023',
    role: 'Undergraduate Researcher - Robotics',
    org: 'ACURA, Penn State Abington',
    location: 'Abington, PA',
    start: '2023-10',
    end: '2024-10',
    current: false,
    bullets: [
      'Built a ROS robot from scratch with 2 cameras, a LiDAR sensor, and a Raspberry Pi.',
      'Developed autonomous navigation and ML-based object detection.',
    ],
    tags: ['ROS', 'Computer Vision', 'Embedded Systems', 'Python'],
  },
];

export const leadershipExperience = [
  {
    id: 'sga-2024',
    role: 'Director of Educational Equity',
    org: 'Student Government Association',
    location: 'Abington, PA',
    start: '2024-08',
    end: null,
    current: true,
    bullets: [
      'Lead and work with a team of 5 senators developing legislation.',
      'Collaborate with 6 directors overseeing change across Penn State Abington.',
    ],
    tags: ['Leadership', 'Policy', 'Campus Impact'],
  },
  {
    id: 'css-2024',
    role: 'Vice-President',
    org: 'Abington Computer Science Society',
    location: 'Abington, PA',
    start: '2024-08',
    end: null,
    current: true,
    bullets: [
      'Organize technical workshops and lead a team of 7 in planning campus CS events.',
    ],
    tags: ['Leadership', 'Computer Science', 'Community'],
  },
  {
    id: 'integrity-committee-2024',
    role: 'Student Representative',
    org: 'Academic Integrity Committee',
    location: 'Abington, PA',
    start: '2024-08',
    end: null,
    current: true,
    bullets: [
      'Participate in academic review boards for student conduct and integrity cases.',
    ],
    tags: ['Governance', 'Ethics', 'Committee Work'],
  },
  {
    id: 'global-programs-2024',
    role: 'Peer Mentor',
    org: 'Office of Global Programs',
    location: 'Abington, PA',
    start: '2024-04',
    end: null,
    current: true,
    bullets: [
      'Supported 8 international students and helped lead onboarding for 150+ peers during orientation.',
    ],
    tags: ['Mentorship', 'Student Success', 'Event Support'],
  },
  {
    id: 'ccate-2025',
    role: 'Volunteer Member',
    org: 'Centro de Cultura Arte Trabajo y Educacion',
    location: 'Norristown, PA',
    start: '2025-03',
    end: null,
    current: true,
    bullets: [
      'Mentored middle and high school students and developed workshops for 25+ students.',
    ],
    tags: ['Mentorship', 'Community', 'Education'],
  },
];

export const experienceGroups = [
  {
    title: 'Professional Experience',
    description: 'AI engineering, forward deployed product work, and production software delivery.',
    accent: 'blue',
    items: professionalExperience,
  },
  {
    title: 'Research & Publications',
    description: 'Published AI research, LLM user behavior, robotics, and human-centered computing.',
    accent: 'indigo',
    items: researchExperience,
  },
  {
    title: 'Leadership & Service',
    description: 'Accountability, campus leadership, mentorship, and community work.',
    accent: 'emerald',
    items: leadershipExperience,
  },
];

export const experience = [
  ...professionalExperience,
  ...researchExperience,
  ...leadershipExperience,
];

export function sortExperiences(list = experience) {
  const toNum = (s) => (s ? Number(s.replace('-', '')) : 999999);
  return [...list].sort((a, b) => {
    if (a.current && !b.current) return -1;
    if (!a.current && b.current) return 1;
    const aEnd = toNum(a.end);
    const bEnd = toNum(b.end);
    if (bEnd !== aEnd) return bEnd - aEnd;
    return toNum(b.start) - toNum(a.start);
  });
}
