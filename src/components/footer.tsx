import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              PORTFOLIO
            </Link>
            <p className="text-zinc-400 mb-6 max-w-md">
              Creating beautiful, functional digital experiences that help businesses and individuals stand out in the
              digital landscape.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-zinc-400 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>123 Design Street</li>
              <li>New York, NY 10001</li>
              <li>your.email@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

