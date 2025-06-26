'use client';

import Navbar from './component/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white py-12 px-6 border-b-2 border-blue-500">
        <section className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-24 ms-15">
        
          <motion.div
            className="text-center md:text-left max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Ahmed Mahmoud</h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mt-2">And I'm a Front-End Developer</h2>
            <p className="mt-4 text-gray-300 text-sm">
              Recent Software Engineering graduate with experience in front-end development,
              software testing, and business analysis. Passionate about bridging technical
              solutions with business needs.
            </p>

            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/ahmed-mahmoud-793778226" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                LinkedIn
              </a>
              <a href="mailto:ahmedmahmoud0929@gmail.com" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-900 hover:text-white transition">
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden border-4 border-blue-500"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/AhmedMahmoud.jpg" 
              alt="Ahmed Profile"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </section>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div>
            <h3 className="text-3xl font-bold text-white">5+</h3>
            <p className="text-sm">Years of learning</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-sm">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">20+</h3>
            <p className="text-sm">Technologies Used</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">100+</h3>
            <p className="text-sm">Hours of Practice</p>
          </div>
        </motion.div>
      </main>
      <About/>
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
