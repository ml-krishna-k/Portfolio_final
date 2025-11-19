import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      id: "01",
      title: "Focus",
      description: "Architecting RAG systems and high-dimension embeddings that turn raw data into decisive intelligence."
    },
    {
      id: "02",
      title: "Build",
      description: "Deploying production-grade LLM agents and multimodal diagnostic tools with uncompromised reliability."
    },
    {
      id: "03",
      title: "Goal",
      description: "Setting new standards in AI engineering where technical precision meets measurable business impact."
    }
  ];

  return (
    <section id="about" className="relative w-full py-32 md:py-48 bg-[#050505] overflow-hidden">
      
      {/* --- Background Texture --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 border-b border-white/10 pb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Inlined luxury ease
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-[1px] bg-[#bf9b30]" />
               <span className="text-sm md:text-base uppercase tracking-[0.4em] text-[#bf9b30] font-medium">
                 Who I Am
               </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-light leading-[1.1]">
              Building the future with <br />
              <span className="italic text-neutral-500">Artificial Intelligence.</span>
            </h2>
          </motion.div>

          {/* Decorative "Est." Stamp */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="hidden md:block text-right"
          >
            <div className="w-16 h-[1px] bg-[#bf9b30] mb-4 ml-auto"></div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Based in India
            </p>
          </motion.div>
        </div>
        <br />
        <br />
        
        {/* --- MAIN NARRATIVE --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-4">
             {/* Negative Space */}
          </div>
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} // Inlined
              className="text-xl md:text-3xl font-light text-neutral-300 leading-relaxed"
            >
              I am a GenAI Engineer and Frontend Developer. I do not just write code; 
              <span className="text-white"> I engineer intelligence.</span> Specializing in 
              RAG pipelines and LLM agents and Interactive UI/UX.
            </motion.p>
          </div>
        </div>
        
        {/* --- EDITORIAL SERVICE COLUMNS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.16, 1, 0.3, 1] }} // Inlined
              className={`
                group relative py-12 pr-8 flex flex-col justify-between h-full
                ${index !== 2 ? 'md:border-r border-white/10' : ''} 
                border-b md:border-b-0 border-white/10 md:pl-8
                ${index === 0 ? 'md:pl-0' : ''}
              `}
            >
              <br />
              <br />
              <div>
                
                <span className="block text-xs text-[#bf9b30] font-mono mb-6">
                  / {item.id}
                </span>
                <h3 className="text-3xl text-white font-serif italic mb-6 group-hover:text-[#bf9b30] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 uppercase tracking-widest leading-loose max-w-xs">
                  {item.description}
                </p>
              </div>

              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#bf9b30] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out origin-left"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}