"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing.",
      technologies: ["React", "TypeScript", "Redux", "Chart.js"],
      image: "🛒",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      technologies: ["Angular", "RxJS", "Firebase", "Material Design"],
      image: "✅",
      link: "#",
    },
    {
      title: "Weather Forecast Platform",
      description:
        "Interactive weather application with detailed forecasts, maps integration, and personalized alerts using third-party APIs.",
      technologies: ["React", "Next.js", "Tailwind CSS", "OpenWeather API"],
      image: "🌤️",
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media managers to track engagement metrics across multiple platforms in real-time.",
      technologies: ["Angular", "TypeScript", "NgRx", "D3.js"],
      image: "📊",
      link: "#",
    },
    {
      title: "Portfolio Builder",
      description:
        "SaaS platform enabling users to create and customize professional portfolios with templates and drag-and-drop editor.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "💼",
      link: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-responsive fitness application for tracking workouts, nutrition, and progress with personalized recommendations.",
      technologies: ["React Native", "Redux", "Express", "PostgreSQL"],
      image: "💪",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold"
              >
                View Project
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
