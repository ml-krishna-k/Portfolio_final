import Navbar from "./components/navbar.tsx";
import Hero from "./sections/hero.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/projects.tsx";
import Contact from "./sections/contact.tsx";
import Experience from "./sections/Experience.tsx";
import Skills from "./sections/skills.tsx";
import Footer from "./sections/footer.tsx";
import { ChatWidget } from "./sections/ChatWidget.tsx";
import Cursor from "./components/Cursor.tsx";
import Background from "./components/Background.tsx";

export default function App() {
  return (
    <>
      <Cursor />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <ChatWidget />
    </>
  );
}
