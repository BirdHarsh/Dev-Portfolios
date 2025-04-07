"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"



export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "React & React Native Developer"

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(typing)
      }
    }, 100)

    return () => clearInterval(typing)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
     
      <div className="absolute inset-0 bg-gradient-to-br  z-0" />

      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-white ">Hello, I&apos;m</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ">Harsh Vardhan Rajak</h1>
            <div className="h-8">
              <p className=" md:text-2xl font-medium text-muted-foreground text-opacity-100 text-[rgba(84, 1, 255,0.5)]" >
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-muted-foreground max-w-lg">
              I build exceptional and accessible digital experiences for the web and mobile platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-primary/20" />
              <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary/30">
                <img
                  src="/profile.png?height=300&width=300"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
         
      </div>
    </section>
  )
}

