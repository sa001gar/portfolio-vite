import React, { Suspense } from 'react';
import { Terminal } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

function AnimatedSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#10B981" wireframe />
    </mesh>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-green-400 pt-16 box-border relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8" />
          </motion.div>

          <div className="px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 sm:mb-6 typing-animation break-words leading-tight whitespace-normal">
                Sagar Kundu
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-green-400/80 mb-4">
                Software Developer & ML Expert
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-base sm:text-xl md:text-2xl font-mono mb-6 sm:mb-8 typing-animation-delay leading-relaxed">
                Backend Developer @ Durgapur, West Bengal_
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Computer Science Student at Mankar College
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-400 text-black font-mono font-bold hover:bg-green-300 transition-colors rounded text-center transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-green-400 text-green-400 font-mono font-bold hover:bg-green-400 hover:text-black transition-all rounded text-center transform hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}