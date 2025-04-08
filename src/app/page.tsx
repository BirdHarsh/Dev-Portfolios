
import { BeamsBackground } from "@/components/ui/beams-background";
import Header from "@/components/header";

import About from "@/components/about";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Projects from "@/components/projects";


export default function Home() {

  return (
    <main className="relative min-h-screen">
      {/* <div className="absolute inset-0 -z-10">
        <SplashCursor />
      </div> */}
      <Header />
      <BeamsBackground />
 
      <Projects />   
      <About />
     <Skills />
      
 <Footer />
    </main>
    
   
  );
}
