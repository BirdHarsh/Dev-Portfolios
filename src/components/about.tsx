"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
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

  return (
    <section id="about" className="section-padding bg-white dark:bg-zinc-900">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative aspect-square max-w-md mx-auto md:ml-0 overflow-hidden rounded-2xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </div>

          <div className="reveal">
            <h3 className="text-2xl font-bold mb-4">Creative Developer & Designer</h3>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              I am a passionate developer and designer with over 5 years of experience creating beautiful, functional
              digital experiences. I specialize in front-end development, UI/UX design, and creating engaging
              interactive websites.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only
              look great but also provide exceptional user experiences. I am constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium mb-2">Name:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">Your Name</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">your.email@example.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">New York, USA</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">Freelance / Full-time</p>
              </div>
            </div>

            <Button className="rounded-full px-6">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

