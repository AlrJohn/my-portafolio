import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.jpg';

export default function HeroParallax() {
    const ref = useRef(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the movement
    const mouseX = useSpring(x, { stiffness: 400, damping: 40 });
    const mouseY = useSpring(y, { stiffness: 400, damping: 40 });

    function handleMouseMove(e) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Calculate normalized position (-1 to 1)
        const xPos = (clientX / innerWidth - 0.5) * 2;
        const yPos = (clientY / innerHeight - 0.5) * 2;
        x.set(xPos);
        y.set(yPos);
    }

    // Layer transforms (Parallax effect)
    // Background blob moves slowly in direction of mouse
    const blobX = useTransform(mouseX, [-1, 1], [-20, 20]);
    const blobY = useTransform(mouseY, [-1, 1], [-20, 20]);

    // Profile image moves opposite to mouse (feels closer)
    const profileX = useTransform(mouseX, [-1, 1], [15, -15]);
    const profileY = useTransform(mouseY, [-1, 1], [15, -15]);
    const profileRotate = useTransform(mouseX, [-1, 1], [-2, 2]);

    // Floating badge (front layer) moves even more
    const badgeX = useTransform(mouseX, [-1, 1], [40, -40]);
    const badgeY = useTransform(mouseY, [-1, 1], [40, -40]);

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[550px] md:h-[700px] flex items-center justify-center overflow-hidden perspective-1000"
        >
            {/* 1. Abstract Background Blob (Behind) */}
            <motion.div
                style={{ x: blobX, y: blobY }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/30 to-blue-600/30 rounded-full blur-[100px] z-0"
            />

            {/* 2. Main Profile Image (Middle) */}
            <motion.div
                style={{ x: profileX, y: profileY, rotateY: profileRotate }}
                className="relative z-10 w-[280px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-white/10 bg-slate-800/50 backdrop-blur-sm group"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img
                    src={profileImg}
                    alt="Jonathan Reyes"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Name overlay on the card itself for style */}
                <div className="absolute bottom-6 left-6 z-20 text-white">
                    <div className="text-xs font-medium uppercase tracking-wider text-indigo-300 mb-1">Creative Developer</div>
                    <div className="text-xl font-bold">Jonathan Reyes</div>
                </div>
            </motion.div>

            {/* 3. Floating UI Card (Front) */}
            <motion.div
                style={{ x: badgeX, y: badgeY }}
                className="absolute bottom-[20%] right-[10%] md:right-[25%] z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl w-48 hidden md:block"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        ✓
                    </div>
                    <div>
                        <div className="text-xs text-gray-300">System Status</div>
                        <div className="text-sm font-bold text-white">Online</div>
                    </div>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[80%]" />
                </div>
            </motion.div>

            {/* another floating element left */}
            <motion.div
                style={{ x: useTransform(mouseX, [-1, 1], [60, -60]), y: useTransform(mouseY, [-1, 1], [30, -30]) }}
                className="absolute top-[25%] left-[5%] md:left-[20%] z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg shadow-xl hidden md:block"
            >
                <code className="text-xs text-blue-300 font-mono">
                    <span className="text-purple-400">const</span> <span className="text-yellow-200">builder</span> = <span className="text-green-300">true</span>;
                </code>
            </motion.div>

        </div>
    );
}
