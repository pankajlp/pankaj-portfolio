"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-10 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            Contact
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Let’s Build
            <span className="block text-cyan-400">
              Something Intelligent
            </span>
          </h2>

          <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Interested in analytics engineering, AI workflows,
            automation systems, or enterprise intelligence?
            Let’s connect.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          
          {/* Email */}
          <motion.a
            href="mailto:contact@nordneuron.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
          >
            <Mail
              className="mx-auto text-cyan-400 mb-5"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              Email
            </h3>

            <p className="mt-3 text-white/60">
              contact@nordneuron.com
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/pankajlp"
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
          >
            <FaLinkedin
              className="mx-auto text-cyan-400 mb-5"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-3 text-white/60">
              Connect professionally
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/pankajlp"
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
          >
            <FaGithub
              className="mx-auto text-cyan-400 mb-5"
              size={34}
            />

            <h3 className="text-xl font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-3 text-white/60">
              Explore code & tools
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}