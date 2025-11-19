import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiOpenai } from "react-icons/si"; 
import { IoArrowUp, IoClose } from "react-icons/io5";

// Types
type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
};

const SUGGESTED_QUESTIONS = [
  "Experience?",
  "Tech Stack?",
  "Contact info?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Get current time for the initial message
  const getCurrentTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      text: "Welcome. I am Krishna's automated portfolio concierge. How may I direct you?",
      time: getCurrentTime(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Auto-open once
  useEffect(() => {
    const hasOpenedBefore = sessionStorage.getItem("chat-opened");
    if (!hasOpenedBefore) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("chat-opened", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // 1. Add User Message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: text,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // 2. Simulate Thinking
    setTimeout(() => {
      setIsTyping(false);
      
      // 3. Bot Response
      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: "Krishna is building.....",
        time: getCurrentTime(),
      };
      setMessages((prev) => [...prev, newBotMsg]);
    }, 1500);
  };

  return (
    <>
      {/* --- TRIGGER BUTTON --- */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#0a0a0a] border border-[#bf9b30]/30 shadow-2xl flex items-center justify-center text-[#bf9b30] backdrop-blur-md group"
      >
        <div className="absolute inset-0 bg-[#bf9b30]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <IoClose className="text-xl" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <SiOpenai className="text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-28 right-6 md:right-8 w-[360px] h-[550px] max-h-[75vh] rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden z-50"
          >
            {/* Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* 1. HEADER (Clean & Minimal) */}
            <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02] backdrop-blur-xl flex justify-between items-center z-10">
              <div>
                <h3 className="font-serif text-white text-base tracking-wide">Concierge</h3>
                <div className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#bf9b30] animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest text-neutral-500">Online</span>
                </div>
              </div>
              {/* Optional: Close mini button */}
              <button onClick={() => setIsOpen(false)} className="text-neutral-600 hover:text-white transition-colors">
                <IoClose />
              </button>
            </div>

            {/* 2. MESSAGES AREA */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-none z-10">
              
              {/* Date Divider */}
              <div className="flex justify-center">
                <span className="text-[9px] text-neutral-700 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-full">
                  Today
                </span>
              </div>

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-[#bf9b30] text-black font-medium rounded-2xl rounded-tr-sm" // User = Gold
                        : "bg-[#1a1a1a] text-neutral-300 border border-white/5 rounded-2xl rounded-tl-sm" // Bot = Dark
                    }`}
                  >
                    {msg.text}
                  </div>
                  {/* Timestamp */}
                  <span className="text-[9px] text-neutral-600 mt-1 px-1">
                    {msg.time}
                  </span>
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start">
                  <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1">
                    <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                    <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <span className="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* 3. INPUT AREA (Floating Pill) */}
            <div className="p-5 z-10">
              {/* Suggestions */}
              {messages.length < 3 && !isTyping && (
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(q)}
                      className="flex-shrink-0 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#bf9b30]/30 hover:text-[#bf9b30] text-[10px] text-neutral-400 transition-all duration-300 whitespace-nowrap"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Bar */}
              <div className="relative flex items-center group">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  placeholder="Type a message..."
                  className="w-full bg-[#161616] border border-white/10 rounded-full px-5 py-3.5 pr-12 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-[#bf9b30]/40 focus:bg-[#1a1a1a] transition-all shadow-inner"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 w-8 h-8 rounded-full bg-[#bf9b30] text-black flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-0 disabled:scale-50 transition-all duration-300"
                >
                  <IoArrowUp className="text-sm" />
                </button>
              </div>
              
              {/* Micro Footer */}
              <div className="text-center mt-3">
                <p className="text-[8px] uppercase tracking-[0.2em] text-neutral-700">
                  Private & Secure
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}