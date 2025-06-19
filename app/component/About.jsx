// app/about/page.js

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <>
      
      <main className="min-h-screen bg-[#030b16] text-white pt-24 px-6 border-b-2 border-blue-500" id='about'>
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 md:h-[500px] relative"
          >
            <Image
              src="/AhmedMahmoud.jpg" 
              alt="Ahmed Mahmoud"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
            <p className="text-lg leading-relaxed mb-4">
              I'm <span className="text-white font-semibold">Ahmed Mahmoud</span>, a recent graduate in Software Engineering from the Arab Academy for Science and Technology in Alexandria.
            </p>
            <p className="text-base leading-relaxed mb-4">
              I have practical experience in front-end development using technologies like <span className="text-white">React.js, JavaScript, HTML, and CSS</span>. I’ve also worked as a full-stack development intern, collaborating in Agile environments and supporting business analysis tasks.
            </p>
            <p className="text-base leading-relaxed">
              My strengths include <span className="text-white">problem-solving, requirement gathering, usability testing, and teamwork</span>. I’m passionate about building modern, user-friendly web applications and aligning software solutions with real business needs.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}
