// src/pages/Home.jsx
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Code, Server, Database, Brain } from 'lucide-react';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import { projects } from '../data/projects.js';
import ProjectCard from '../components/ProjectCard.jsx';
import HeroParallax from '../components/HeroParallax.jsx';

/** Animation helpers */
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true },
});

export default function Home() {
  const navigate = useNavigate();
  const { openChat } = useOutletContext();

  return (
    <div className="-mt-20">
      {/* Negative margin to pull hero up behind the transparent navbar if we had one. 
        For now, we just want full background coverage. */}

      {/* ---------- HERO ---------- */}
      <section className="relative w-full min-h-[95vh] bg-slate-950 text-white overflow-hidden rounded-b-[3rem] md:rounded-b-[5rem] flex flex-col pt-24">

        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        <div className="absolute -left-40 top-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center flex-1 pb-16">

          {/* LEFT: typography */}
          <div className="z-10 order-2 lg:order-1 flex flex-col gap-6">
            <motion.div {...fadeInUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-blue-200">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Available for work
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
              {...fadeInUp(0.1)}
            >
              Full Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Developer
              </span>
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed" {...fadeInUp(0.2)}>
              Building intelligent web applications with modern tech stacks.
              Currently exploring LLMs and Agentic Workflows.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 mt-2" {...fadeInUp(0.3)}>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-semibold">01</span>
                <span className="text-base text-gray-200">Frontend Architecture</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-semibold">02</span>
                <span className="text-base text-gray-200">Backend Systems</span>
              </div>
              <div className="w-px h-12 bg-white/10 hidden md:block" />
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-500 uppercase tracking-widest font-semibold">03</span>
                <span className="text-base text-gray-200">AI Integration</span>
              </div>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 mt-8" {...fadeInUp(0.4)}>
              <button
                onClick={openChat}
                className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition flex items-center gap-2 group"
              >
                Let's Talk <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition text-white"
              >
                View Projects
              </button>
            </motion.div>
          </div>

          {/* RIGHT: 3D Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroParallax />
          </div>

        </div>
      </section>

      {/* ---------- SERVICE PILLARS (Brand Strip) ---------- */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-8 text-gray-400 dark:text-gray-500 grayscale opacity-70 hover:opacity-100 transition duration-500">
            <div className="flex items-center gap-2 text-xl font-semibold"><Code /> React & Next.js</div>
            <div className="flex items-center gap-2 text-xl font-semibold"><Server /> Python Flask</div>
            <div className="flex items-center gap-2 text-xl font-semibold"><Database /> PostgreSQL</div>
            <div className="flex items-center gap-2 text-xl font-semibold"><Brain /> Neural Networks</div>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="page py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">Selected Works</h2>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:underline">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link to="/projects" className="text-blue-600 font-medium hover:underline">View all projects</Link>
        </div>
      </section>
    </div>
  );
}

