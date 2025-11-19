import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolio } from "../data/profile"; // Verify this path
import Magnetic from "../components/Magnetic";

/* --------------------------------------------------------------------------
   HELPER COMPONENT 1: FLAGSHIP PROJECT (The "Rolls Royce" View)
   Defined at the top to ensure it is available before use.
   --------------------------------------------------------------------------
*/
const FlagshipProject = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  
  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Flip layout: Even numbers = Left Image, Odd numbers = Right Image
  const isEven = index % 2 === 0;

  // Tech Stack Safety Check
  const techStack = project?.tech || [];

  return (
      <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
          
          {/* 1. IMAGE SIDE */}
          <div className="w-full lg:w-3/5 aspect-[16/9] lg:aspect-[4/3] overflow-hidden relative group">
              {/* Frame Lines (appear on hover) */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div style={{ y }} className="w-full h-[120%] relative"> 
                  <img 
                      src={project.media || ""} 
                      alt={project.name || "Project"}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-out"
                      onError={(e: any) => { e.target.style.display = 'none' }} 
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
          </div>

          {/* 2. TEXT SIDE */}
          <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
              <span className="text-[#bf9b30] text-xs font-mono mb-6">0{index + 1} — Flagship</span>
              
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-none">
                  {project.name}
              </h3>
              
              <p className="text-neutral-400 text-base leading-relaxed mb-8 max-w-md">
                  {project.description}
              </p>

              {/* TECH TAGS LOOP - Fixed Variable 't' */}
              <div className="flex flex-wrap gap-3 mb-12">
                  {techStack.slice(0, 4).map((t: string, i: number) => (
                      <span key={i} className="text-[10px] uppercase tracking-widest text-neutral-500 border border-neutral-800 px-3 py-1 rounded-full">
                          {t}
                      </span>
                  ))}
              </div>

              <Magnetic strength={0.3}>
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#bf9b30] group-hover:border-[#bf9b30] transition-all duration-500">
                          <svg className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-white">View Case Study</span>
                  </a>
              </Magnetic>
          </div>
      </div>
  );
};

/* --------------------------------------------------------------------------
   HELPER COMPONENT 2: COLLECTION ITEM (The "Showroom" View)
   --------------------------------------------------------------------------
*/
const CollectionItem = ({ project, index }: { project: any, index: number }) => {
  // Tech Stack Safety Check
  const techStack = project?.tech || [];

  return (
      <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group w-full border-t border-white/10 pt-8 hover:border-[#bf9b30]/50 transition-colors duration-500"
      >
          <div className="flex justify-between items-baseline mb-6">
               <h4 className="text-2xl md:text-3xl font-light text-white group-hover:text-[#bf9b30] transition-colors duration-300">
                  {project.name}
               </h4>
               <span className="text-[10px] uppercase tracking-widest text-neutral-600">
                  Est. 2024
               </span>
          </div>

          {/* Image Preview */}
          <div className="w-full aspect-[16/9] overflow-hidden bg-neutral-900 mb-6 relative">
              <img 
                  src={project.media || ""} 
                  alt={project.name}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e: any) => { e.target.style.backgroundColor = '#1a1a1a' }}
              />
              <div className="absolute inset-0 bg-[#bf9b30]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
              {project.description}
          </p>

          <div className="flex items-center justify-between">
              <div className="flex gap-2">
                   {/* TECH TAGS LOOP - Fixed Variable 't' */}
                   {techStack.slice(0, 2).map((t: string, i: number) => (
                       <span key={i} className="text-[9px] text-neutral-500 uppercase tracking-wider">
                           {t}
                       </span>
                   ))}
              </div>
              
              <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-white flex items-center gap-2 group/link">
                  Explore
                  <span className="block w-4 h-[1px] bg-white transition-all duration-300 group-hover/link:w-8 group-hover/link:bg-[#bf9b30]" />
              </a>
          </div>
      </motion.div>
  );
};

/* --------------------------------------------------------------------------
   MAIN COMPONENT: PROJECTS
   --------------------------------------------------------------------------
*/
export default function Projects() {
  // Safety Check: Ensure data exists
  const allProjects = portfolio?.projects || [];
  
  // Slicing logic
  const flagships = allProjects.slice(0, 2);
  const collection = allProjects.slice(2, 8);

  return (
    <section id="projects" className="relative w-full bg-[#050505] py-32 md:py-48 overflow-hidden">
      
      {/* Luxury Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <br />
        <br /> 
        <br />
        
        <div className="mb-32 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-[1px] bg-[#bf9b30]" />
               <span className="text-sm md:text-base uppercase tracking-[0.4em] text-[#bf9b30] font-medium">
                 Masterpieces
               </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-light text-white">
              Selected <span className="italic text-neutral-500">Works.</span>
            </h2>
          </motion.div>

          <div className="hidden md:block text-right">
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Engineering &mdash; Artistry
            </p>
          </div>
        </div>


        {/* 1. THE FLAGSHIPS LOOP */}
        <div className="flex flex-col gap-40 mb-48">
          {flagships.map((project, index) => (
            <FlagshipProject key={index} project={project} index={index} />
          ))}
        </div>


        {/* 2. THE COLLECTION LOOP */}
        {collection.length > 0 && (
            <div>
                <div className="flex items-center gap-6 mb-20 justify-center">
                    <div className="h-[1px] w-24 bg-white/10" />
                    <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-serif italic">
                        The Bespoke Collection
                    </span>
                    <br />
                    <br />
                    
                    <div className="h-[1px] w-24 bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {collection.map((project, index) => (
                        <CollectionItem key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        )}

      </div>
    </section>
  );
}