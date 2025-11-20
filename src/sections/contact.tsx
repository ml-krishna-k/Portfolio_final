import { motion } from "framer-motion";
import { portfolio } from "../data/profile"; 
import Magnetic from "../components/Magnetic";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  
  const contactInfo = portfolio?.contact || {};
  
  const contactLinks = [
    { 
      id: "email",
      label: "Drop a Line", 
      value: contactInfo.email || "kkrishnarajr@gmail.com", 
      url: `mailto:${contactInfo.email}`,
      icon: <HiOutlineMail />,
      
      img: "https://media.tenor.co/images/6a57d8981256bd10835c6feb17d988b5/raw" 
    },
    { 
      id: "linkedin",
      label: "Connect", 
      value: "LinkedIn Profile", 
      url: contactInfo.linkedin || "#",
      icon: <SiLinkedin />,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1098d485928537.5d927a82ad3a9.gif"
    },
    { 
      id: "github",
      label: "Explore Code", 
      value: "GitHub Profile", 
      url: contactInfo.github || "#",
      icon: <SiGithub />,
      img: "https://repository-images.githubusercontent.com/462900780/0a10af70-6cbf-46df-9071-0ff586a3b1d6"
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-[#050505] pt-40 pb-32 overflow-hidden">
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-32 text-center md:text-left"
        >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
               <div className="w-12 h-[1px] bg-[#bf9b30]" />
               <span className="text-sm uppercase tracking-[0.3em] text-[#bf9b30] font-medium">
                 The Finale
               </span>
            </div>

            <h2 className="text-5xl md:text-8xl font-serif font-light text-white leading-[1.1] mb-8">
              Ready to <br />
              <span className="italic text-neutral-500">Engineer the Future?</span>
            </h2>
            
            <p className="text-neutral-400 max-w-xl text-lg leading-relaxed md:ml-1">
              I am currently available for select freelance projects and engineering roles. 
              Let's turn complex problems into elegant solutions.
            </p>
        </motion.div>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactLinks.map((link: any, index: number) => (
            <ContactCard key={link.id} link={link} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- SUB-COMPONENT: LUXURY CARD --- */
function ContactCard({ link, index }: { link: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="h-full"
        >
            <Magnetic strength={0.2}>
                <a
                    href={link.url}
                    target={link.id !== "email" ? "_blank" : undefined}
                    rel={link.id !== "email" ? "noopener noreferrer" : undefined}
                    className="group relative flex flex-col h-[380px] p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bf9b30]/50 transition-all duration-700 overflow-hidden"
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#bf9b30]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* 1. TOP: ICON */}
                    <div className="relative z-20 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl text-neutral-400 group-hover:text-[#bf9b30] group-hover:border-[#bf9b30] transition-all duration-500 bg-[#050505]/50 backdrop-blur-sm">
                            {link.icon}
                        </div>
                    </div>

                    {/* 2. MIDDLE: THE IMAGE (Filling the space) */}
                    {/* flex-1 makes it expand to fill all available empty space */}
                    <div className="relative z-10 flex-1 my-6 overflow-hidden rounded-lg border border-white/5 group-hover:border-[#bf9b30]/30 transition-colors duration-500">
                        <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
                        <img 
                            src={link.img} 
                            alt={link.label}
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>

                    {/* 3. BOTTOM: TEXT */}
                    <div className="relative z-20 flex-shrink-0">
                        <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 group-hover:text-white/90 transition-colors">
                            {link.label}
                        </span>
                        <div className="flex items-center justify-between group/text">
                            <span className="text-lg md:text-xl font-light text-white group-hover:translate-x-2 transition-transform duration-500">
                                {link.id === "email" ? "Send Email" : link.value}
                            </span>
                            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#bf9b30]">
                                &rarr;
                            </span>
                        </div>
                    </div>

                </a>
            </Magnetic>
        </motion.div>
    );
}