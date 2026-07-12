export const site = {
  name: 'Jonathan Alavez Reyes',
  shortName: 'Jonathan Reyes',
  title: 'AI Engineer / Forward Deployed Engineer',
  email: 'joni17111@outlook.com',
  location: 'Norristown, PA',
  description: 'Computer Science student building LLM products, agentic workflows, and full-stack systems.',
  repositoryUrl: 'https://github.com/AlrJohn/my-portafolio',
  githubUrl: 'https://github.com/AlrJohn',
  linkedinUrl: 'https://linkedin.com/in/jonathan-alavez',
  resumeUrl: '/Jonathan_Alavez_Resume_2026.pdf',
};

export const socialLinks = [
  { label: 'GitHub', href: site.githubUrl },
  { label: 'LinkedIn', href: site.linkedinUrl },
  { label: 'Resume', href: site.resumeUrl },
  { label: 'Email', href: `mailto:${site.email}` },
];

export const navigation = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Coursework', to: '/coursework' },
  { label: 'Contact', to: '/contact' },
];

export const about = {
  intro: "I'm a Computer Science student at Penn State Abington and a Schreyer Honors Scholar focused on AI engineering, forward deployed product work, and production-minded full-stack systems.",
  focus: 'AI engineering and FDE work',
  internship: 'Deloitte AI Innovation Fellow',
  leadership: 'National Guard, SGA, and CS Society',
  highlights: [
    {
      title: 'AI + Product Delivery',
      body: 'I build LLM interfaces, agentic workflows, retrieval systems, and full-stack features that turn ambiguous workflows into usable tools.',
    },
    {
      title: 'Research + Field Experience',
      body: 'My background combines published AI research, robotics, enterprise AI internships, and leadership in high-accountability teams.',
    },
  ],
};

export const impactStats = [
  { value: 'Deloitte', label: 'AI Innovation Fellow, CPG Innovation' },
  { value: '200k+', label: 'Salesforce call transcripts summarized with LLM workflows' },
  { value: '<1 hr', label: 'Reduced documentation work from 10+ hours to under 1 hour' },
  { value: '50+', label: 'Support technicians trained on an AI support workflow' },
  { value: '4.0', label: 'GPA, Schreyer Honors College Scholar' },
  { value: '13', label: 'Soldiers led as a National Guard Sergeant' },
];

export const publication = {
  title: 'AI and Student Self-Efficacy in Communication',
  venue: 'IEEE Xplore',
  href: 'https://ieeexplore.ieee.org/document/11413961',
};

// Review before the next content release:
// current experience dates, coursework after Fall 2025, GPA, availability,
// project descriptions, and external project links.
