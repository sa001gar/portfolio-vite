import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users, Code } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-mono font-bold text-green-400">About Me</h2>
            <div>
              <p className="text-gray-300 text-lg">
                As the Co-founder of Prime-Dev Technologies Pvt. Ltd., I lead innovation in AI, ML, and full-stack development. With expertise in both traditional and emerging technologies, I help businesses transform their digital presence and mentor aspiring developers.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Briefcase className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="font-mono text-green-400">Co-founder & CTO</h3>
                    <p className="text-gray-400">Prime-Dev Technologies Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="font-mono text-green-400">B.Sc in Computer Science</h3>
                    <p className="text-gray-400">Mankar College, The University of Burdwan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="font-mono text-green-400">Mentor & Educator</h3>
                    <p className="text-gray-400">Guided 20+ students in their coding journey</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Code className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="font-mono text-green-400">Open Source Contributor</h3>
                    <p className="text-gray-400">Active contributor to educational resources</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="font-mono text-green-400">Bug Hunter & Security Expert</h3>
                    <p className="text-gray-400">Ensuring security through code excellence and proactive bug hunting.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-lg overflow-hidden border-2 border-green-400/50 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
              <img
                src="https://github.com/sa001gar/portfolio-vite/blob/main/myself.jpeg?raw=true"
                alt="Profile"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-400/10 rounded-lg -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -top-6 -left-6 w-48 h-48 bg-green-400/10 rounded-lg -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}