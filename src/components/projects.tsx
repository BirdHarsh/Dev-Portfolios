"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [filter, setFilter] = useState("all")

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

  const projects = [
    {
      title: "Stack",
      description: "STACK is a mobile app that allows any user to leverage the power of AI and their creativity to completely redesign garments and footwear for themselves or their business.",
      image: "/stackIcon.png",
      category: "mobile",
      technologies: ["React Native","Three.js","Redux","Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "MovaBook",
      description:         " MovaBook, a fitness app similar to Strava, for tracking jogging, walking, and cycling with real-time map sharing, leaderboards, and social media features to boost user engagement",

      image: "/Movabook.jpg",
      category: "mobile",
      technologies: ["React Native", "Google Maps API", "Redux", "Firebase",  ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SourceWorm",
      description:         "SourceWorm is a web application that allows users to upload and share their source code with others, providing a platform for collaboration and feedback.",

      image: "/sourceworm.png",
      category: "web",
      technologies: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
   {
      title: "Ceto Drive",
      description:             "Ceto-Drive is a web application that allows users to track their driving habits and receive personalized feedback to improve their driving skills.",


      image: "/",  
      category: "web",
      technologies: ["React", "GSAP", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    
  
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section-padding bg-white dark:bg-zinc-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 mx-auto mb-6"></div>
          <p className="text-zinc-700 dark:text-zinc-300 mb-8">Check out some of my recent work</p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => setFilter("web")}
              className="rounded-full"
            >
              Web
            </Button>
            <Button
              variant={filter === "mobile" ? "default" : "outline"}
              onClick={() => setFilter("mobile")}
              className="rounded-full"
            >
              Mobile
            </Button>
            <Button
              variant={filter === "3d" ? "default" : "outline"}
              onClick={() => setFilter("3d")}
              className="rounded-full"
            >
              3D
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-3 py-1 bg-zinc-200 dark:bg-zinc-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

