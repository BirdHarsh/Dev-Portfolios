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
                src="/profile.png"
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
            I m Harsh Vardhan Rajak, a Full-Stack Developer with a strong front-end focus. I specialize in building responsive, cross-platform applications using React, React Native, and modern tools like Redux, Firebase, and Three.js. Whether it's integrating 3D visuals, building real-time features, or creating smooth mobile experiences, I enjoy turning ideas into fast, scalable, and engaging products.
</p>
<p className="text-zinc-700 dark:text-zinc-300 mb-6">
            I bring a product-first mindset, clean code practices, and a passion for building things that work beautifully. From fitness and shopping apps to interactive user interfaces, I focus on crafting user-centric experiences backed by reliable performance and solid architecture.

</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-medium mb-2">Name:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">Harsh Vardhan Rajak</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">Harsh4rk@gmail.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">Indore India</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability:</h4>
                <p className="text-zinc-700 dark:text-zinc-300">Full-time</p>
              </div>
            </div>
            <a href="/Harsh_Vardhan_Rajak.pdf" download>
            <Button className="rounded-full px-6">
              <Download className="mr-2 h-4 w-4"  />
              Download Resume
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

