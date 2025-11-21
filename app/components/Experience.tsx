"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description:
        "Leading frontend development for enterprise applications using React and TypeScript. Mentoring junior developers and establishing coding standards.",
      technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      period: "2022 - 2023",
      description:
        "Developed responsive web applications using Angular and React. Collaborated with designers to implement pixel-perfect UI components.",
      technologies: ["Angular", "React", "RxJS", "SCSS"],
    },
    {
      title: "Junior Frontend Developer",
      company: "StartupHub",
      period: "2021 - 2022",
      description:
        "Built reusable components and features for client projects. Participated in code reviews and agile development processes.",
      technologies: ["React", "JavaScript", "CSS", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
