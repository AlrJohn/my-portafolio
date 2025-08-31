// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';

/** Animation helpers */
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.3 },
});

const gridItem = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  const navigate = useNavigate();
  const { openChat } = useOutletContext(); // <-- from App.jsx

  return (
    <div className="space-y-20 md:space-y-28">
      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 md:py-24">
        {/* soft background glows */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-30 bg-blue-300 dark:bg-blue-600" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full blur-3xl opacity-25 bg-purple-300 dark:bg-purple-600" />

        <div className="page">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14">
            {/* LEFT */}
            <motion.div {...fadeInUp(0)}>
              <span className="inline-block text-xs px-2 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-600/20 mb-4">
                AI / ML • LLM Apps • Full-stack
              </span>

              <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight" {...fadeInUp(0.05)}>
                Jonathan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Reyes</span>
              </motion.h1>

              <motion.p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl" {...fadeInUp(0.1)}>
                CS student building practical AI experiences: LLM interfaces, NLP tools, and
                full-stack apps with React + Flask. Ask my site anything—there’s a chatbot for that.
              </motion.p>

              <motion.div className="mt-6 flex flex-wrap gap-3" {...fadeInUp(0.15)}>
                <button
                  onClick={() => navigate('/projects')}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2"
                >
                  View My Work <ArrowRight size={18} />
                </button>
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Contact
                </Link>
                <button
                  onClick={openChat}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 inline-flex items-center gap-2"
                >
                  Ask Me <MessageCircle size={18} />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT highlight card */}
            <motion.div {...fadeInUp(0.1)}>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-xl p-5">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">Featured</div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Project</div>
                  <div className="font-semibold">Personal AI Chatbot</div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    On-site assistant that answers questions about my background and projects.
                  </p>
                  <div className="mt-3 flex gap-2">
                    {['React', 'Flask', 'OpenAI'].map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-blue-600/10 text-blue-700 dark:text-blue-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS (map + animate) ---------- */}
      <section className="page">
        <motion.h2 className="text-2xl md:text-3xl font-bold mb-2" {...fadeInUp(0)}>
          Featured Projects
        </motion.h2>
        <motion.p className="text-gray-600 dark:text-gray-400 mb-6" {...fadeInUp(0.05)}>
          A few things I’m proud of
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} {...gridItem} transition={{ delay: 0.06 * i }}>
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-6" {...fadeInUp(0.1)}>
          <Link to="/projects" className="inline-flex items-center gap-2 underline">
            See all projects <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
