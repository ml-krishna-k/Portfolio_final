import { motion } from "framer-motion";
import { 
  SiPython, SiLangchain, SiPytorch, SiHuggingface, 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiFastapi, SiFlask, SiDocker, SiAmazon, SiGit, SiPostgresql
} from "react-icons/si";
import { FaDatabase, FaRobot, FaCode, FaLayerGroup, FaCloud } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

const skillsData = [
  {
    category: "GenAI & Neural Architecture",
    icon: <FaRobot />, 
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "RAG Pipelines", icon: <FaDatabase /> },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "Embeddings", icon: <FaLayerGroup /> },
      { name: "Vector DBs", icon: <SiPostgresql /> },
      { name: "Prompt Eng.", icon: <FaCode /> },
      { name: "Transformers", icon: <SiHuggingface /> },
      { name: "Deep Learning", icon: <SiPytorch /> },
    ],
  },
  {
    category: "Frontend Engineering",
    icon: <SiReact />,
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: <FaCloud />,
    items: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <VscJson /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "AWS", icon: <SiAmazon /> },
      { name: "Git / CI/CD", icon: <SiGit /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#050505] overflow-hidden">
      
      <br />
      <br /> 
      <br />
      
      {/* --- NOISE TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- MAIN CONTAINER --- */}
      {/* pt-32 pb-64: Massive vertical padding for the whole section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pt-32 pb-64">

        {/* --- HEADER --- */}
        {/* mb-48: This creates a 12rem (approx 200px) gap before the skills start */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-48"
        >
            <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-[1px] bg-[#bf9b30]" />
               <span className="text-sm md:text-base uppercase tracking-[0.4em] text-[#bf9b30] font-medium">
                 Technical Expertise
               </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-serif font-light text-white leading-[1.1]">
              The <span className="italic text-neutral-500">Arsenal.</span>
            </h2>
        </motion.div>
        <br />
        <br />
        

        {/* --- SKILLS LIST --- */}
        {/* gap-32: Creates massive breathing room between GenAI, Frontend, etc. */}
        <div className="flex flex-col gap-32"> 
          {skillsData.map((group, index) => (
            <SkillGroup key={index} group={group} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* --- SUB-COMPONENT: SKILL GROUP --- */
function SkillGroup({ group, index }: { group: any, index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative"
        >
            {/* Subtle Top Divider for Structure */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent -translate-y-12" />

            {/* Category Header */}
            {/* mb-16: Pushes the grid of chips far down from the title */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
                
                {/* Icon Box */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#bf9b30] text-2xl shrink-0">
                    {group.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-light text-white tracking-wide">
                    {group.category}
                </h3>
            </div>

            {/* The Grid */}
            {/* gap-x-8 gap-y-8: Opens up the chips so they aren't touching */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                {group.items.map((skill: any, i: number) => (
                    <SkillItem key={i} skill={skill} index={i} />
                ))}
            </div>
        </motion.div>
    );
}

/* --- SUB-COMPONENT: SKILL ITEM --- */
function SkillItem({ skill, index }: { skill: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            // Added h-full to ensure consistent height
            // Added min-h-[80px] to make them feel substantial
            className="group relative flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bf9b30]/50 transition-all duration-500 cursor-default min-h-[80px]"
        >
            {/* Hover Gradient Fill */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#bf9b30]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

            {/* Icon */}
            <div className="text-2xl text-neutral-500 group-hover:text-[#bf9b30] transition-colors duration-300 relative z-10 shrink-0">
                {skill.icon}
            </div>

            {/* Text */}
            <span className="text-sm md:text-base text-neutral-300 font-medium tracking-wide group-hover:text-white transition-colors duration-300 relative z-10">
                {skill.name}
            </span>
        </motion.div>
    );
}