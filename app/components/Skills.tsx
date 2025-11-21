"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Angular", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 92 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 82 },
    { name: "RxJS", level: 78 },
    { name: "Next.js", level: 85 },
    { name: "Git", level: 88 },
    { name: "REST APIs", level: 90 },
    { name: "Responsive Design", level: 93 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          Technical Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-800">{skill.name}</span>
                <span className="text-primary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
