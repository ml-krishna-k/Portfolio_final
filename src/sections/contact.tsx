import { motion } from "framer-motion";
import { portfolio } from "../data/profile"; // Ensure path is correct
import Magnetic from "../components/Magnetic";
// Icons: Installing react-icons is required for this premium look
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  // Safety checks for data
  const contactInfo = portfolio?.contact || {};
  
  const contactLinks = [
    { 
      id: "email",
      label: "Drop a Line", 
      value: contactInfo.email || "hello@example.com", 
      url: `mailto:${contactInfo.email}`,
      icon: <HiOutlineMail />
    },
    { 
      id: "linkedin",
      label: "Connect", 
      value: "LinkedIn Profile", 
      url: contactInfo.linkedin || "#",
      icon: <SiLinkedin />
    },
    { 
      id: "github",
      label: "Explore Code", 
      value: "GitHub Profile", 
      url: contactInfo.github || "#",
      icon: <SiGithub />
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-[#050505] pt-40 pb-32 overflow-hidden">
      
      <br />
      <br /> 
      <br />
      
      {/* --- 1. LUXURY TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- 2. HEADER (Editorial Style) --- */}
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
            <br />
            <p className="text-neutral-400 max-w-xl text-lg leading-relaxed md:ml-1">
              I am currently available for select freelance projects and engineering roles. 
              Let's turn complex problems into elegant solutions.
            </p>
            <br />
            <br />
            
        </motion.div>


        {/* --- 3. THE GRID (Minimalist & Tall) --- */}
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
                    className="group relative flex flex-col justify-between h-[280px] p-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bf9b30]/50 transition-all duration-700 overflow-hidden"
                >
                    {/* Hover Flash (Subtle Gold) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#bf9b30]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Top: Icon */}
                    <div className="relative z-10 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-2xl text-neutral-400 group-hover:text-[#bf9b30] group-hover:border-[#bf9b30] transition-all duration-500">
                        {link.icon}
                    </div>

                    {/* Bottom: Text */}
                    <div className="relative z-10">
                        <span className="block text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 group-hover:text-white/70 transition-colors">
                            {link.label}
                        </span>
                        <div className="flex items-center justify-between group/text">
                            <span className="text-xl md:text-2xl font-light text-white group-hover:translate-x-2 transition-transform duration-500">
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