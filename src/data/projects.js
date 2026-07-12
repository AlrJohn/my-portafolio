// Public projects selected for AI Engineering / FDE portfolio positioning.
export const projects = [
  {
    slug: 'veteran-claims-copilot',
    title: 'Veteran Claims Copilot',
    category: 'AI Product / Government Workflow',
    blurb: 'AI-native assistant that routes VA disability claim scenarios, surfaces evidence gaps, and generates citation-backed readiness summaries.',
    summary:
      'A full-stack AI assistant for current service members and veterans navigating VA disability compensation workflows. It combines official VA guidance, a rule matrix, document parsing, LLM reasoning, and safety boundaries to produce grounded next-step packets.',
    role: 'Product engineer and AI workflow builder',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'OpenAI', 'pypdf', 'Vitest'],
    repo: 'https://github.com/AlrJohn/veteran-claims-copilot',
    demo: 'https://veteran-claims-copilot.vercel.app',
    impact: [
      'Grounds guidance in official VA source rules instead of open-ended advice.',
      'Supports initial claim preparation and post-decision review routing.',
      'Uses tests around results, intake, follow-up, consistency, and edge cases.',
    ],
    highlights: [
      'Citation-backed outputs',
      'Safety-scoped AI workflow',
      'Decision-letter parsing path',
      'Rules-plus-LLM routing',
    ],
    caseStudy: {
      problem:
        'Veterans often need help understanding where they are in a complex claims journey, which evidence may be missing, and which next path may fit their situation. A static form wizard struggles with messy user explanations and document context.',
      approach:
        'The app extracts user context, checks official VA process rules, asks targeted follow-up questions, and produces an educational readiness packet with citations, warnings, and escalation guidance.',
      architecture: [
        'React and TypeScript frontend for landing, intake, follow-up, and results flows.',
        'FastAPI backend with session models, router, explainer, citation, safety, and document parser services.',
        'Official VA source pack encoded into structured rules for grounded path selection.',
        'Prompt files separate routing, follow-up, explainer, and safety behavior.',
      ],
      outcomes: [
        'Demonstrates a deployable FDE-style product: ambiguous public-sector workflow, structured intake, grounded reasoning, and user-facing outputs.',
        'Shows AI engineering judgment through safety boundaries, citation behavior, and fallback rules.',
      ],
    },
  },
  {
    slug: 'fysics-is-phun',
    title: 'Fysics is Phun Classroom Platform',
    category: 'Full-Stack Real-Time Product',
    blurb: 'Web platform that automates a classroom physics game with host, player, and jury flows, timers, scoring, and exportable results.',
    summary:
      'A CS487W team project built for a Penn State physics stakeholder to replace manual classroom game coordination with a role-based web system for 15-25 typical participants.',
    role: 'Frontend Lead for the host experience',
    tech: ['React', 'FastAPI', 'WebSockets', 'Python', 'Pandas', 'Vercel'],
    repo: 'https://github.com/AlrJohn/CS487W_Fysics_is_Phun',
    demo: 'https://cs487wfysicsisphun.vercel.app',
    impact: [
      'Supports host, player, and juror experiences with role-specific screens.',
      'Automates timed stages, scoring, leaderboard updates, and final exports.',
      'Uses join codes and QR flows so students can participate from phones or laptops.',
    ],
    highlights: [
      'Real-time game state',
      'Host-controlled stage progression',
      'Deck import/export',
      'CSV and Excel summaries',
    ],
    caseStudy: {
      problem:
        'The original classroom game required manual pacing, scoring, and coordination across players and jurors. That overhead distracted from teaching and made fair scoring harder to manage at classroom scale.',
      approach:
        'The platform keeps the instructor in control while automating repetitive gameplay mechanics: lobby setup, role assignment, timed fake-answer submission, guessing, jury voting, scoring, and exports.',
      architecture: [
        'React frontend split into host, player, spectator, and jury pages.',
        'FastAPI backend with deck management, host authentication, active sessions, and WebSocket broadcasts.',
        'Server-side timers and stage state keep clients synchronized during each round.',
        'CSV deck handling and Excel summary generation support classroom reuse.',
      ],
      outcomes: [
        'Shows full-stack product delivery for a real stakeholder and multi-role workflow.',
        'Demonstrates frontend ownership across host setup, lobby control, deck management, and game operations.',
      ],
    },
  },
  {
    slug: 'portfolio-ai-chatbot',
    title: 'Portfolio AI Chatbot',
    category: 'RAG / Self-Hosted AI',
    blurb: 'Retrieval-augmented chatbot that answers questions about my background, projects, skills, and experience from portfolio context.',
    summary:
      'An interactive AI layer for this portfolio, backed by a RAG pipeline, vector search, a Flask API, and a quantized model deployed as a long-running Linux/Raspberry Pi service.',
    role: 'Full-stack AI builder',
    tech: ['React', 'Python', 'Flask', 'RAG', 'Ollama', 'MLflow'],
    repo: 'https://github.com/AlrJohn/my-portafolio',
    demo: '/',
    impact: [
      'Turns the portfolio itself into a product demo.',
      'Embeds user queries, retrieves curated context, and generates answers from grounded profile data.',
      'Tracks experiments and deployment readiness with MLflow for repeatable iteration.',
    ],
    highlights: [
      'On-site AI assistant',
      'Vector search',
      'Raspberry Pi service',
      'Frontend observability',
    ],
    caseStudy: {
      problem:
        'A static portfolio makes recruiters dig for context. The chatbot creates a conversational entry point for projects, experience, and technical background while doubling as proof of AI integration skills.',
      approach:
        'The system retrieves relevant portfolio knowledge before generating answers and exposes the backend through a small API consumed by the React site.',
      architecture: [
        'React portfolio frontend with a modal chat interface and safe unavailable states.',
        'Python API layer for real-time question answering.',
        'RAG pipeline with embedded queries, vector search, retrieved context, and generated responses.',
        'Self-hosted model deployment on Linux/Raspberry Pi infrastructure.',
      ],
      outcomes: [
        'Demonstrates practical AI deployment beyond a hosted API call.',
        'Connects engineering, infrastructure, UX, and monitoring inside one public portfolio feature.',
      ],
    },
  },
];

export const featuredProjects = projects;

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
