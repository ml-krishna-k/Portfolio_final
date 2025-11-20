import { motion } from "framer-motion";
import { portfolio } from "../data/profile"; // Verify path

export default function Experience() {
  // Safety check
  const experienceData = portfolio?.experience || [];

  return (
    <section id="experience" className="relative w-full bg-[#050505] overflow-hidden">
      <br />
      <br />

      {/* --- LUXURY TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pt-32 pb-64">
        <br />
        <br /> 
        <br />
        
        {/* --- 1. HEADER (Consistent with Arsenal Section) --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-40"
        >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-[1px] bg-[#bf9b30]" />
               <span className="text-sm md:text-base uppercase tracking-[0.4em] text-[#bf9b30] font-medium">
                 Career History
               </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-serif font-light text-white leading-[1.1]">
              The <span className="italic text-neutral-500">Trajectory.</span>
            </h2>
        </motion.div>

        {/* --- 2. EXPERIENCE LIST (Editorial Layout) --- */}
        <div className="flex flex-col">
          {experienceData.map((item, index) => (
            <ExperienceRow key={index} item={item} index={index} />
            
          ))}
          {/* Final bottom border to close the list */}
          <div className="w-full h-[1px] bg-white/10" />
        </div>

      </div>
    </section>
  );
}

/* --- SUB-COMPONENT: THE ROW --- */
function ExperienceRow({ item, index }: { item: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative border-t border-white/10 transition-colors duration-500 hover:bg-white/[0.02]"
    >
      <div className="py-16 flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-baseline">
        
        {/* year and date*/}
        <div className="w-full md:w-1/4">
            <div className="inline-flex items-center gap-3">
                <span className="text-[#bf9b30] text-xs font-mono uppercase tracking-widest">
                    
                    0{index + 1}
                </span>
                <span className="text-sm text-neutral-400 font-medium tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                    {item.period}
                </span>
            </div>
        </div>

        {/* ROLE & COMPANY */}
        <div className="w-full md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                {item.title}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-[#bf9b30] transition-colors duration-300">
                {item.company}
            </p>
        </div>

        {/*How */}
        <div className="w-full md:w-5/12 pl-0 md:pl-8">
            <ul className="flex flex-col gap-4">
                {item.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start">
                        {/* Custom Gold Bullet Point */}
                        <span className="mt-1.5 w-1 h-1 bg-neutral-700 rounded-full shrink-0 group-hover:bg-[#bf9b30] transition-colors duration-300" />
                        <p className="text-base text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                            {bullet}
                        </p>
                    </li>
                ))}
            </ul>
        </div>

      </div>

      
      <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#bf9b30] group-hover:w-full transition-all duration-1000 ease-[0.22,1,0.36,1]" />
    </motion.div>
  );
}