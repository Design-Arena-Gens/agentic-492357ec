"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 space-y-4"
          >
            <p>
              I'm a passionate frontend developer with 3 years of professional
              experience building modern, user-centric web applications. My
              expertise lies in React and Angular, where I've delivered
              high-performance solutions for diverse clients.
            </p>
            <p>
              I specialize in creating responsive, accessible, and visually
              appealing interfaces that provide exceptional user experiences. My
              approach combines clean code practices with modern design
              principles to deliver products that users love.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community through blog posts and mentoring.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            {["React", "Angular", "TypeScript", "JavaScript", "HTML/CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-primary px-4 py-2 rounded-full font-semibold"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
