"use client"

import { useEffect } from "react"
import { Code, Figma, Layers, Smartphone, Zap, Database } from "lucide-react"

export default function Skills() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", reveal)
    reveal() // Initial check

    return () => window.removeEventListener("scroll", reveal)
  }, [])

  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Building responsive and performant websites using modern frameworks and technologies.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Figma className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces and experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native-like performance.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs to power web applications.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "3D Modeling",
      description: "Creating immersive 3D models and animations for web and mobile applications.",
      technologies: ["Three.js", "Blender", "WebGL", "GSAP"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Optimizing web applications for speed, accessibility, and search engines.",
      technologies: ["Lighthouse", "Web Vitals", "SEO", "Analytics"],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-zinc-50 dark:bg-zinc-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 mx-auto mb-6"></div>
          <p className="text-zinc-700 dark:text-zinc-300">Here are some of the skills and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-zinc-900 dark:text-zinc-100">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

