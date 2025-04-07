import { Gallery6 } from "@/components/gallery6";
import { BeamsBackground } from "@/components/ui/beams-background";
import Header from "@/components/header";

import About from "@/components/about";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
const demoData = {
  heading: "Featured Projects",
  demoUrl: "https://www.shadcnblocks.com",
  items: [
    {
      id: "item-1",
      title: "Stack",
      summary:
        "STACK is a mobile app that allows any user to leverage the power of AI and their creativity to completely redesign garments and footwear for themselves or their business.",
      url: "#",
      image: "/stackIcon.png",
    },
    {
      id: "item-2",
      title: "Movabook",
      summary:
        " MovaBook, a fitness app similar to Strava, for tracking jogging, walking, and cycling with real-time map sharing, leaderboards, and social media features to boost user engagement",
      url: "#",
      image: "/Movabook.jpg",
    },
    {
      id: "item-3",
      title: "SourceWorm",
      summary:
        "SourceWorm is a web application that allows users to upload and share their source code with others, providing a platform for collaboration and feedback.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title: "Ceto-Drive",
      summary:
        "Ceto-Drive is a web application that allows users to track their driving habits and receive personalized feedback to improve their driving skills.",
      url: "#",
      image: "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
    },
    
    
  ],
};

export default function Home() {

  return (
    <main className="relative min-h-screen">
      {/* <div className="absolute inset-0 -z-10">
        <SplashCursor />
      </div> */}
      <Header />
      <BeamsBackground />
      <Gallery6 {...demoData} />  
      <Projects />   
      <About />
     <Skills />
      
 <Footer />
    </main>
    
   
  );
}
