import { motion as Motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { site } from '../data/site.js';

export default function HeroParallax() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 400, damping: 40 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 40 });
  const blobX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const blobY = useTransform(mouseY, [-1, 1], [-20, 20]);
  const profileX = useTransform(mouseX, [-1, 1], [15, -15]);
  const profileY = useTransform(mouseY, [-1, 1], [15, -15]);
  const profileRotate = useTransform(mouseX, [-1, 1], [-2, 2]);
  const badgeX = useTransform(mouseX, [-1, 1], [40, -40]);
  const badgeY = useTransform(mouseY, [-1, 1], [40, -40]);
  const codeX = useTransform(mouseX, [-1, 1], [60, -60]);
  const codeY = useTransform(mouseY, [-1, 1], [30, -30]);

  const handleMouseMove = (event) => {
    if (reduceMotion) return;
    x.set((event.clientX / window.innerWidth - 0.5) * 2);
    y.set((event.clientY / window.innerHeight - 0.5) * 2);
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative w-full h-[550px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <Motion.div style={{ x: blobX, y: blobY }} className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-full blur-[100px]" />
      <Motion.div
        style={{ x: profileX, y: profileY, rotateY: profileRotate }}
        className="relative z-10 w-[280px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10 bg-slate-800/50 group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <img src={profileImg} alt={site.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute bottom-6 left-6 z-20 text-white">
          <div className="text-xs font-medium uppercase tracking-wider text-indigo-300 mb-1">{site.title}</div>
          <div className="text-xl font-bold">{site.shortName}</div>
        </div>
      </Motion.div>
      <Motion.div style={{ x: badgeX, y: badgeY }} className="absolute bottom-[20%] right-[10%] md:right-[25%] z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl w-48 hidden md:block">
        <div className="text-xs text-gray-300">Current focus</div>
        <div className="text-sm font-bold text-white">AI-enabled products</div>
      </Motion.div>
      <Motion.div style={{ x: codeX, y: codeY }} className="absolute top-[25%] left-[5%] md:left-[20%] z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg shadow-xl hidden md:block">
        <code className="text-xs text-blue-300 font-mono">
          <span className="text-purple-400">const</span> builder = <span className="text-green-300">true</span>;
        </code>
      </Motion.div>
    </div>
  );
}
